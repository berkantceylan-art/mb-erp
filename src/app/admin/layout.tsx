'use client';

import React, { useState } from 'react';
import Link from 'next/navigation';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Cpu,
  Wallet,
  Settings,
  LogOut,
  ShieldCheck,
  Globe,
  Coins,
  ChevronDown,
  Bell,
  Search,
  CheckCircle2,
} from 'lucide-react';

const navigationItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Vakalar & İş Emirleri', href: '/admin/cases', icon: FolderKanban, badge: '24 Aktif' },
  { name: 'Paydaşlar (Doktor & Klinik)', href: '/admin/stakeholders', icon: Users },
  { name: 'CAD/CAM & Üretim', href: '/admin/production', icon: Cpu },
  { name: 'Finans & Faturalar', href: '/admin/finance', icon: Wallet },
  { name: 'Sistem & Güvenlik', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLocale, setActiveLocale] = useState('TR');
  const [activeCurrency, setActiveCurrency] = useState('TRY');
  const [showLocaleMenu, setShowLocaleMenu] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/admin-logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* SOL SIDEBAR */}
      <aside className="w-64 border-r border-slate-800 bg-slate-950/80 backdrop-blur-xl flex flex-col justify-between shrink-0 fixed inset-y-0 left-0 z-40">
        <div>
          {/* Logo */}
          <div className="h-16 px-6 border-b border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center shadow-md shadow-sky-500/20">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight leading-none">
                MB DİŞ PROTEZ
              </div>
              <div className="text-[10px] font-semibold tracking-wider text-sky-400 mt-1 uppercase">
                Enterprise ERP
              </div>
            </div>
          </div>

          {/* Menü Linkleri */}
          <nav className="p-4 space-y-1.5">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname?.startsWith(item.href));
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? 'bg-sky-600/15 text-sky-400 border border-sky-500/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[11px] font-semibold bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Alt Kullanıcı Kartı & Çıkış */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-3 px-2 py-1.5">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-sky-400">
              SA
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-slate-200 truncate">
                Super Admin
              </div>
              <div className="text-[11px] text-slate-500 truncate">
                admin@mbdental.com
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 rounded-xl transition cursor-pointer disabled:opacity-50"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{loggingOut ? 'Çıkış Yapılıyor...' : 'Oturumu Kapat'}</span>
          </button>
        </div>
      </aside>

      {/* SAĞ ANA ALAN */}
      <div className="flex-1 flex flex-col pl-64 min-w-0">
        {/* ÜST BAR (HEADER) */}
        <header className="h-16 border-b border-slate-800 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-30 px-8 flex items-center justify-between">
          {/* Arama Barı */}
          <div className="relative w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Vaka No, Doktor veya Hasta Ara..."
              className="w-full pl-10 pr-4 py-1.5 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>

          {/* Sağ Aksiyonlar: Dil, Para Birimi, Bildirimler */}
          <div className="flex items-center gap-3">
            {/* Dil Seçici (i18n) */}
            <div className="relative">
              <button
                onClick={() => setShowLocaleMenu(!showLocaleMenu)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>{activeLocale}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>
              {showLocaleMenu && (
                <div className="absolute right-0 mt-1 w-32 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-1 z-50">
                  {['TR (Türkçe)', 'EN (English)', 'FR (Français)', 'DE (Deutsch)'].map((lang) => {
                    const code = lang.substring(0, 2);
                    return (
                      <button
                        key={code}
                        onClick={() => {
                          setActiveLocale(code);
                          setShowLocaleMenu(false);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs rounded-lg text-slate-300 hover:bg-slate-800 hover:text-sky-400 transition"
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Para Birimi Seçici */}
            <div className="relative">
              <button
                onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition cursor-pointer"
              >
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeCurrency}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>
              {showCurrencyMenu && (
                <div className="absolute right-0 mt-1 w-28 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-1 z-50">
                  {['TRY (₺)', 'EUR (€)', 'USD ($)'].map((curr) => {
                    const code = curr.substring(0, 3);
                    return (
                      <button
                        key={code}
                        onClick={() => {
                          setActiveCurrency(code);
                          setShowCurrencyMenu(false);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs rounded-lg text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition"
                      >
                        {curr}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bildirim İkonu */}
            <button className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition relative cursor-pointer">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            </button>
          </div>
        </header>

        {/* SAYFA İÇERİĞİ */}
        <main className="p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
