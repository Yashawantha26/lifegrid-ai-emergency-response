'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const leadershipData = [
  { name: 'MON', critical: 12, nonCritical: 20 },
  { name: 'TUE', critical: 18, nonCritical: 28 },
  { name: 'WED', critical: 14, nonCritical: 22 },
  { name: 'THU', critical: 16, nonCritical: 26 },
  { name: 'FRI', critical: 24, nonCritical: 30 },
  { name: 'SAT', critical: 20, nonCritical: 24 },
];

const volumeData = [
  { name: 'Fire', value: 24 },
  { name: 'Medical', value: 38 },
  { name: 'Traffic', value: 19 },
  { name: 'Utility', value: 12 },
  { name: 'Police', value: 9 },
];

export function IncidentOverview() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
      <div className="card rounded-2xl p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-slate-400">Response trend</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Incident volume</h3>
          </div>
          <span className="status-pill bg-green-500/10 text-green-300 ring-1 ring-green-500/30">Stable</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={leadershipData}>
              <defs>
                <linearGradient id="colorCritical" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorNonCritical" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#3d8bfd" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3d8bfd" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Area type="monotone" dataKey="critical" stroke="#ef4444" fill="url(#colorCritical)" strokeWidth={3} />
              <Area type="monotone" dataKey="nonCritical" stroke="#3d8bfd" fill="url(#colorNonCritical)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card rounded-2xl p-6">
        <p className="text-sm uppercase tracking-[0.14em] text-slate-400">Incident mix</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Category split</h3>
        <div className="mt-6 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
