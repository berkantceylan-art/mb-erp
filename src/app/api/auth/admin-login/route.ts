import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, signAdminJwt, AUTH_COOKIE_NAME, hashPassword } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function POST(req: NextRequest) {
  const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'E-posta ve şifre zorunludur.' },
        { status: 400 }
      );
    }

    // 1. Kullanıcıyı Veritabanında Bul
    let user = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    // Otomatik Seed Fallback (İlk kurulum için)
    if (!user && email.trim().toLowerCase() === 'admin@mbdental.com') {
      const defaultHash = await hashPassword('AdminMB2026!');
      user = await prisma.user.create({
        data: {
          email: 'admin@mbdental.com',
          passwordHash: defaultHash,
          firstName: 'MB',
          lastName: 'Super Admin',
          role: Role.SUPER_ADMIN,
          isActive: true,
        },
      });
    }

    if (!user) {
      // Başarısız Denemeyi Logla
      await prisma.auditLog.create({
        data: {
          action: 'ADMIN_LOGIN_FAILED_USER_NOT_FOUND',
          ipAddress,
          details: { email, userAgent, reason: 'Kullanıcı bulunamadı' },
        },
      });

      return NextResponse.json(
        { success: false, message: 'Geçersiz e-posta adresi veya şifre.' },
        { status: 401 }
      );
    }

    // 2. Hesap Aktiflik ve Rol Kontrolü
    if (!user.isActive) {
      await prisma.auditLog.create({
        data: {
          userId: user.id,
          action: 'ADMIN_LOGIN_FAILED_INACTIVE',
          ipAddress,
          details: { email, userAgent, reason: 'Hesap pasif durumda' },
        },
      });

      return NextResponse.json(
        { success: false, message: 'Bu hesap dondurulmuş veya pasif durumdadır.' },
        { status: 403 }
      );
    }

    if (user.role !== Role.SUPER_ADMIN) {
      await prisma.auditLog.create({
        data: {
          userId: user.id,
          action: 'ADMIN_LOGIN_FAILED_UNAUTHORIZED_ROLE',
          ipAddress,
          details: { email, userRole: user.role, reason: 'Super Admin yetkisi yok' },
        },
      });

      return NextResponse.json(
        { success: false, message: 'Bu alana sadece Super Admin yetkisine sahip kullanıcılar erişebilir.' },
        { status: 403 }
      );
    }

    // 3. Şifre Doğrulama
    const isPasswordValid = await comparePassword(password, user.passwordHash);
    if (!isPasswordValid) {
      await prisma.auditLog.create({
        data: {
          userId: user.id,
          action: 'ADMIN_LOGIN_FAILED_WRONG_PASSWORD',
          ipAddress,
          details: { email, userAgent, reason: 'Yanlış şifre girildi' },
        },
      });

      return NextResponse.json(
        { success: false, message: 'Geçersiz e-posta adresi veya şifre.' },
        { status: 401 }
      );
    }

    // 4. JWT Token Oluşturma
    const token = await signAdminJwt({
      userId: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      locale: user.locale,
      currency: user.currency,
    });

    // 5. Başarılı Girişi Logla
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'ADMIN_LOGIN_SUCCESS',
        ipAddress,
        details: { email, userAgent },
      },
    });

    // 6. HTTP-Only Güvenli Cookie ile Yanıt Ver
    const response = NextResponse.json({
      success: true,
      message: 'Giriş başarılı! Yönetim paneline yönlendiriliyorsunuz...',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 Saat
      path: '/',
    });

    return response;
  } catch (error: any) {
    console.error('Admin Login Route Error:', error);
    return NextResponse.json(
      { success: false, message: 'Sunucu hatası oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
