import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MB Diş Protez & CAD/CAM ERP',
  description: 'Enterprise Dental Laboratory Management & ERP System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
