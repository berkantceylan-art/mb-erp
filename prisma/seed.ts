import { PrismaClient, Role, SupportedLocale, SupportedCurrency } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 MB Diş Protez & CAD/CAM ERP - Veritabanı Tohumlama Başlatılıyor...');

  const defaultAdminEmail = 'admin@mbdental.com';
  const defaultAdminPass = 'AdminMB2026!';
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(defaultAdminPass, salt);

  const admin = await prisma.user.upsert({
    where: { email: defaultAdminEmail },
    update: {
      passwordHash,
      role: Role.SUPER_ADMIN,
      isActive: true,
    },
    create: {
      email: defaultAdminEmail,
      passwordHash,
      firstName: 'MB',
      lastName: 'Super Admin',
      role: Role.SUPER_ADMIN,
      locale: SupportedLocale.tr,
      currency: SupportedCurrency.TRY,
      isActive: true,
      twoFactorEnabled: false,
    },
  });

  console.log(`✅ Super Admin kullanıcısı hazır: ${admin.email} (Rol: ${admin.role})`);
}

main()
  .catch((e) => {
    console.error('❌ Seed hatası:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
