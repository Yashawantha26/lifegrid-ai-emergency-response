import Link from 'next/link';
import { ShieldAlert, ChevronRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Emergency Services', href: '#services' },
  { label: 'Report Incident', href: '/citizen/report' },
  { label: 'Track Incident', href: '/citizen/track' },
  { label: 'Admin Login', href: '/admin' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400 ring-1 ring-red-500/30">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">LIFEGRID AI</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/citizen/report"
          className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
        >
          Report Emergency
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
