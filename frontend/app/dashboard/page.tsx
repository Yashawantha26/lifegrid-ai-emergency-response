import { BellRing, Gauge, ShieldAlert, Users } from 'lucide-react';
import { IncidentOverview } from '@/components/dashboard/incident-overview';

const stats = [
  { label: 'Unassigned', value: '28', tone: 'text-amber-300', icon: Users },
  { label: 'Critical', value: '14', tone: 'text-red-300', icon: ShieldAlert },
  { label: 'Avg. response', value: '04:12', tone: 'text-blue-300', icon: Gauge },
  { label: 'Notifications', value: '136', tone: 'text-emerald-300', icon: BellRing },
];

export default function DashboardPage() {
  return (
    <main className="container-shell py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-red-300">Operations dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-white">Emergency command center</h1>
        </div>
        <button className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
          Dispatch briefing
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, tone, icon: Icon }) => (
          <div key={label} className="card rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">{label}</span>
              <div className="rounded-xl bg-slate-950/80 p-2">
                <Icon className={`h-5 w-5 ${tone}`} />
              </div>
            </div>
            <div className={`mt-6 text-3xl font-black ${tone}`}>{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <IncidentOverview />
      </div>
    </main>
  );
}
