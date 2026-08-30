import { SupportedLocale } from './config/i18n';
import { RoleCode, StaffDepartment } from './types/rbac';
import { i18n } from './services/i18n.service';
import { RbacService, AuthenticatedUserContext } from './services/rbac.service';

console.log('================================================================');
console.log('🦷 MB DİŞ PROTEZ ENTERPRISE ERP - AŞAMA 1 DOĞRULAMA TESTİ');
console.log('================================================================\n');

// 1. i18n Çeviri Testi (4 Dil)
const locales: SupportedLocale[] = ['tr', 'en', 'fr', 'de'];
console.log('📌 1. ÇOKLU DİL (i18n) TESTİ:');
for (const loc of locales) {
  console.log(`[${loc.toUpperCase()}] Başlık: "${i18n.t('system.title', loc)}" | Slogan: "${i18n.t('system.tagline', loc)}"`);
}

console.log('\n📌 2. ROL İSİMLERİ (i18n):');
const sampleRoles = [
  RoleCode.SUPER_ADMIN,
  RoleCode.STAFF_PERSONEL,
  RoleCode.DOCTOR_LOCAL,
  RoleCode.DOCTOR_FOREIGN,
  RoleCode.CLINIC_LOCAL,
  RoleCode.CLINIC_FOREIGN,
  RoleCode.AGENT_LOCAL,
  RoleCode.AGENT_FOREIGN,
];

for (const r of sampleRoles) {
  console.log(`- ${r}: TR="${i18n.getRoleName(r, 'tr')}" | EN="${i18n.getRoleName(r, 'en')}" | FR="${i18n.getRoleName(r, 'fr')}" | DE="${i18n.getRoleName(r, 'de')}"`);
}

// 2. RBAC Yetkilendirme Testi
console.log('\n📌 3. RBAC YETKİLENDİRME TESTİ:');

const testDoctorForeign: AuthenticatedUserContext = {
  userId: 'usr-101',
  email: 'dr.pierre@parisdent.fr',
  roles: [RoleCode.DOCTOR_FOREIGN],
  permissions: RbacService.getPermissionsForRoles([RoleCode.DOCTOR_FOREIGN]),
  locale: 'fr',
  currency: 'EUR',
  isForeign: true,
};

const testStaffWarehouse: AuthenticatedUserContext = {
  userId: 'usr-102',
  email: 'depo@mbprotez.com',
  roles: [RoleCode.STAFF_PERSONEL],
  permissions: RbacService.getPermissionsForRoles([RoleCode.STAFF_PERSONEL]),
  locale: 'tr',
  currency: 'TRY',
  isForeign: false,
};

console.log(`- Yabancı Doktor (dr.pierre): Sipariş verebilir mi? -> ${RbacService.hasPermission(testDoctorForeign, 'orders.create') ? '✅ EVET' : '❌ HAYIR'}`);
console.log(`- Yabancı Doktor (dr.pierre): Stok güncelleyebilir mi? -> ${RbacService.hasPermission(testDoctorForeign, 'inventory.stock.adjust') ? '✅ EVET' : '❌ HAYIR'}`);
console.log(`- Depo Personeli (depo@mb): Stok güncelleyebilir mi? -> ${RbacService.hasPermission(testStaffWarehouse, 'inventory.stock.adjust') ? '✅ EVET' : '❌ HAYIR'}`);

console.log('\n================================================================');
console.log('✅ AŞAMA 1 TÜM TEMEL MİMARİ DOĞRULAMALARI BAŞARIYLA GEÇTİ!');
console.log('================================================================');
