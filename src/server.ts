import express from 'express';
import cors from 'cors';
import path from 'path';
import { i18n } from './services/i18n.service';
import { SupportedLocale } from './config/i18n';
import { RoleCode } from './types/rbac';
import { RbacService, AuthenticatedUserContext } from './services/rbac.service';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// i18n API Uç Noktası
app.get('/api/i18n/:locale', (req, res) => {
  const locale = (req.params.locale || 'tr') as SupportedLocale;
  try {
    const filePath = path.join(__dirname, `../src/locales/${locale}/common.json`);
    const translations = require(filePath);
    res.json({ success: true, locale, translations });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Locale not found' });
  }
});

// Mock / Auth Login Endpoint (MFA ve Rol Kontrolü ile)
app.post('/api/auth/login', (req, res) => {
  const { email, password, portalType, isForeign } = req.body;

  if (!email || !password || !portalType) {
    return res.status(400).json({ success: false, message: 'Gerekli alanlar eksik' });
  }

  // Portal Tipi ile Rol Eşleşmesi
  let assignedRole: RoleCode;
  let defaultCurrency = isForeign ? 'EUR' : 'TRY';
  let defaultLocale: SupportedLocale = isForeign ? 'en' : 'tr';

  switch (portalType) {
    case 'DOCTOR':
      assignedRole = isForeign ? RoleCode.DOCTOR_FOREIGN : RoleCode.DOCTOR_LOCAL;
      break;
    case 'CLINIC':
      assignedRole = isForeign ? RoleCode.CLINIC_FOREIGN : RoleCode.CLINIC_LOCAL;
      break;
    case 'AGENT_FOREIGN':
      assignedRole = RoleCode.AGENT_FOREIGN;
      defaultCurrency = 'EUR';
      defaultLocale = 'en';
      break;
    case 'AGENT_LOCAL':
      assignedRole = RoleCode.AGENT_LOCAL;
      defaultCurrency = 'TRY';
      defaultLocale = 'tr';
      break;
    case 'STAFF':
      assignedRole = RoleCode.STAFF_PERSONEL;
      defaultCurrency = 'TRY';
      defaultLocale = 'tr';
      break;
    case 'ADMIN':
      assignedRole = RoleCode.SUPER_ADMIN;
      break;
    default:
      return res.status(400).json({ success: false, message: 'Geçersiz portal kapısı' });
  }

  // 2FA / MFA Doğrulama Kodu Üretimi (Simülasyon)
  const mfaCode = '123456'; // Test ve demo için sabit 2FA kodu

  res.json({
    success: true,
    requiresMfa: true,
    message: 'MFA doğrulama kodu e-posta veya SMS ile gönderildi (Demo Kodu: 123456)',
    tempToken: `temp_${Date.now()}`,
    assignedRole,
    locale: defaultLocale,
    currency: defaultCurrency,
    demoMfaCode: mfaCode,
  });
});

// 2FA / MFA Doğrulama ve Token Üretim Uç Noktası
app.post('/api/auth/verify-mfa', (req, res) => {
  const { code, tempToken, assignedRole, isForeign } = req.body;

  if (code !== '123456') {
    return res.status(401).json({ success: false, message: 'Geçersiz 2FA doğrulama kodu!' });
  }

  const role = assignedRole as RoleCode;
  const permissions = RbacService.getPermissionsForRoles([role]);

  // Rol bazlı yönlendirilecek Dashboard URL'i
  let redirectUrl = '/dashboard';
  switch (role) {
    case RoleCode.SUPER_ADMIN:
      redirectUrl = '/dashboard/admin';
      break;
    case RoleCode.STAFF_PERSONEL:
      redirectUrl = '/dashboard/staff';
      break;
    case RoleCode.DOCTOR_LOCAL:
    case RoleCode.DOCTOR_FOREIGN:
      redirectUrl = '/dashboard/doctor';
      break;
    case RoleCode.CLINIC_LOCAL:
    case RoleCode.CLINIC_FOREIGN:
      redirectUrl = '/dashboard/clinic';
      break;
    case RoleCode.AGENT_LOCAL:
    case RoleCode.AGENT_FOREIGN:
      redirectUrl = '/dashboard/agent';
      break;
  }

  res.json({
    success: true,
    token: `jwt_mb_erp_${Date.now()}_${role}`,
    user: {
      role,
      permissions,
      isForeign: !!isForeign,
      redirectUrl,
    },
    message: 'Giriş ve 2FA doğrulaması başarılı!',
  });
});

// SPA / Dashboard Fallback Route
app.get('{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 MB Diş Protez ERP Web Sunucusu çalışıyor: http://localhost:${PORT}`);
  });
}

export default app;
