import React from 'react';

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Aktif Vakalar', value: '42', change: '+8%', icon: '🦷', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30' },
    { title: 'Üretimdeki İşler', value: '18', change: '5 kritik', icon: '⚙️', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30' },
    { title: 'Aylık Ciro (EUR)', value: '€28,450', change: '+14%', icon: '💶', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30' },
    { title: 'Kargo / Teslimat', value: '7', change: 'Bugün teslim', icon: '📦', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-white tracking-tight">Genel Bakış & Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">Laboratuvar vaka durumu, üretim hattı ve finansal özet göstergeleri.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} bg-slate-900/60 border ${stat.border} backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-xs font-medium text-slate-400">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Grid: Son Vakalar & Hızlı Eylemler */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Son Vakalar */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white">Son İşlem Gören Vakalar</h2>
            <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition">Tümünü Gör →</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                  <th className="pb-3">Vaka No</th>
                  <th className="pb-3">Hasta / Klinik</th>
                  <th className="pb-3">Restorasyon Tipi</th>
                  <th className="pb-3">Aşama</th>
                  <th className="pb-3">Hedef Tarih</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-3.5 font-mono text-xs text-blue-400 font-bold">#MB-2026-001</td>
                  <td className="py-3.5">
                    <div className="font-semibold text-white">Dr. Thomas Mueller</div>
                    <div className="text-xs text-slate-500">Zahnklinik Berlin (DE)</div>
                  </td>
                  <td className="py-3.5">Zirkon Monolitik Kron (x4)</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      CAD/CAM Freze
                    </span>
                  </td>
                  <td className="py-3.5 text-xs text-slate-400">03.09.2026</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-3.5 font-mono text-xs text-blue-400 font-bold">#MB-2026-002</td>
                  <td className="py-3.5">
                    <div className="font-semibold text-white">Dr. Marie Dubois</div>
                    <div className="text-xs text-slate-500">Cabinet Dentaire Paris (FR)</div>
                  </td>
                  <td className="py-3.5">E-Max Lamine Kaplama (x6)</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Seramik Fırınlama
                    </span>
                  </td>
                  <td className="py-3.5 text-xs text-slate-400">04.09.2026</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="py-3.5 font-mono text-xs text-blue-400 font-bold">#MB-2026-003</td>
                  <td className="py-3.5">
                    <div className="font-semibold text-white">Dr. Ahmet Kaya</div>
                    <div className="text-xs text-slate-500">İstanbul Estetik Diş (TR)</div>
                  </td>
                  <td className="py-3.5">All-on-4 Hibrit Bar Protez</td>
                  <td className="py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Kalite Kontrol
                    </span>
                  </td>
                  <td className="py-3.5 text-xs text-slate-400">02.09.2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hızlı İşlemler & Sistem Durumu */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-4">Hızlı İşlemler</h2>
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 font-semibold text-sm transition">
                <span>➕</span> Yeni Vaka Kabulü
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-500/20 font-semibold text-sm transition">
                <span>📦</span> Kargo Etiketi Oluştur (DHL/FedEx)
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 font-semibold text-sm transition">
                <span>🧾</span> E-Fatura / Proforma Kes
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
            <h2 className="text-lg font-bold text-white mb-3">Sistem Durumu</h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>PostgreSQL DB (Supabase)</span>
                <span className="text-emerald-400 font-semibold">● Çevrimiçi</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>CAD/CAM Entegrasyon Servisi</span>
                <span className="text-emerald-400 font-semibold">● Aktif</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Uluslararası Kur Servisi (ECB)</span>
                <span className="text-emerald-400 font-semibold">● Senkronize</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}