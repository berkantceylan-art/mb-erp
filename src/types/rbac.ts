export enum RoleCode {
  SUPER_ADMIN = 'SUPER_ADMIN',
  STAFF_PERSONEL = 'STAFF_PERSONEL',
  DOCTOR_LOCAL = 'DOCTOR_LOCAL',
  DOCTOR_FOREIGN = 'DOCTOR_FOREIGN',
  CLINIC_LOCAL = 'CLINIC_LOCAL',
  CLINIC_FOREIGN = 'CLINIC_FOREIGN',
  AGENT_LOCAL = 'AGENT_LOCAL',
  AGENT_FOREIGN = 'AGENT_FOREIGN',
}

export enum StaffDepartment {
  ACCOUNTING = 'ACCOUNTING',
  HR = 'HR',
  WAREHOUSE = 'WAREHOUSE',
  PRODUCTION = 'PRODUCTION',
  MANAGEMENT = 'MANAGEMENT',
  LOGISTICS = 'LOGISTICS',
}

export interface PermissionDefinition {
  code: string;
  module: 'AUTH' | 'ORDERS' | 'FINANCE' | 'INVENTORY' | 'HR' | 'PRODUCTION' | 'FOREIGN_TRADE' | 'ASSETS' | 'SYSTEM';
  description: string;
}

export const SYSTEM_PERMISSIONS: PermissionDefinition[] = [
  // Dashboard & Auth
  { code: 'dashboard.view', module: 'SYSTEM', description: 'Ana panel ve özet göstergeleri görüntüleme' },
  { code: 'system.settings.manage', module: 'SYSTEM', description: 'Sistem genel ayarları ve kur yönetimi' },
  { code: 'i18n.manage', module: 'SYSTEM', description: 'Dil ve çeviri yönetimi' },

  // Orders / Protez Siparişleri
  { code: 'orders.create', module: 'ORDERS', description: 'Protez siparişi oluşturma' },
  { code: 'orders.view.own', module: 'ORDERS', description: 'Kendi siparişlerini görüntüleme' },
  { code: 'orders.view.all', module: 'ORDERS', description: 'Tüm siparişleri görüntüleme' },
  { code: 'orders.status.update', module: 'ORDERS', description: 'Sipariş durumunu güncelleme (Üretim/Kargo/Teslim)' },

  // Production / Laboratuvar
  { code: 'production.stages.manage', module: 'PRODUCTION', description: 'Laboratuvar aşamalarını ve teknisyen atamalarını yönetme' },
  { code: 'production.quality.inspect', module: 'PRODUCTION', description: 'Kalite kontrol onaylama' },

  // Finance & Accounting
  { code: 'finance.invoices.view', module: 'FINANCE', description: 'Faturaları görüntüleme' },
  { code: 'finance.invoices.create', module: 'FINANCE', description: 'Fatura ve e-Fatura oluşturma' },
  { code: 'finance.payments.manage', module: 'FINANCE', description: 'Ödeme ve cari hesap yönetimi' },
  { code: 'finance.rates.manage', module: 'FINANCE', description: 'Döviz kurlarını güncelleme' },

  // Foreign Trade / Dış Ticaret
  { code: 'foreign_trade.customs.manage', module: 'FOREIGN_TRADE', description: 'Gümrük ve uluslararası kargo evraklarını yönetme' },
  { code: 'foreign_trade.agent_commissions', module: 'FOREIGN_TRADE', description: 'Yurt dışı aracı komisyon hakedişlerini yönetme' },

  // Inventory & Warehouse / Stok & Depo
  { code: 'inventory.stock.view', module: 'INVENTORY', description: 'Hammadde/materyal stoklarını görüntüleme' },
  { code: 'inventory.stock.adjust', module: 'INVENTORY', description: 'Stok giriş/çıkış ve sayım yapma' },

  // HR & PDKS
  { code: 'hr.employees.manage', module: 'HR', description: 'Personel özlük dosyaları ve izin yönetimi' },
  { code: 'hr.attendance.track', module: 'HR', description: 'PDKS vardiya ve giriş-çıkış takibi' },

  // Stakeholder Profiles
  { code: 'stakeholders.manage', module: 'SYSTEM', description: 'Doktor, klinik ve aracı profillerini yönetme' }
];

export const ROLE_DEFAULT_PERMISSIONS: Record<RoleCode, string[]> = {
  [RoleCode.SUPER_ADMIN]: SYSTEM_PERMISSIONS.map((p) => p.code),
  
  [RoleCode.STAFF_PERSONEL]: [
    'dashboard.view',
    'orders.view.all',
    'orders.status.update',
    'production.stages.manage',
    'inventory.stock.view',
    'inventory.stock.adjust',
    'hr.attendance.track'
  ],

  [RoleCode.DOCTOR_LOCAL]: [
    'dashboard.view',
    'orders.create',
    'orders.view.own',
    'finance.invoices.view'
  ],

  [RoleCode.DOCTOR_FOREIGN]: [
    'dashboard.view',
    'orders.create',
    'orders.view.own',
    'finance.invoices.view'
  ],

  [RoleCode.CLINIC_LOCAL]: [
    'dashboard.view',
    'orders.create',
    'orders.view.own',
    'finance.invoices.view'
  ],

  [RoleCode.CLINIC_FOREIGN]: [
    'dashboard.view',
    'orders.create',
    'orders.view.own',
    'finance.invoices.view'
  ],

  [RoleCode.AGENT_LOCAL]: [
    'dashboard.view',
    'orders.create',
    'orders.view.own',
    'foreign_trade.agent_commissions'
  ],

  [RoleCode.AGENT_FOREIGN]: [
    'dashboard.view',
    'orders.create',
    'orders.view.own',
    'foreign_trade.agent_commissions'
  ],
};
