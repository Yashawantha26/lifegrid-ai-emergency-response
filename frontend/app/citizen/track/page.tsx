import { Search, MapPin, CircleDashed } from 'lucide-react';

export default function TrackIncidentPage() {
  return (
    <main className="container-shell py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">Incident tracking</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white">Track an incident</h1>
        </div>

        <div className="card rounded-3xl p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-300">
              <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-400">Reference ID</label>
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-slate-500" />
                <input
                  className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                  placeholder="Enter incident ID"
                  defaultValue="LG-2048"
                />
              </div>
            </div>
            <button className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400">
              Track status
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/50 p-5">
              <div className="flex items-center gap-3">
                <CircleDashed className="h-5 w-5 text-amber-400" />
                <span className="text-sm uppercase tracking-[0.18em] text-amber-300">Ongoing</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">LG-2048</h3>
              <p className="mt-2 text-slate-300">Vehicle fire reported near transport corridor, dispatch active.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/50 p-5">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-sm uppercase tracking-[0.18em] text-blue-300">Location</span>
              </div>
              <p className="mt-4 text-lg text-white">Riverside Ave, Sector 9, North District</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
