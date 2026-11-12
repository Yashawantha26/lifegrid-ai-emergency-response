export default function AdminLoginPage() {
  return (
    <main className="container-shell py-20">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/75 p-8 shadow-panel">
        <p className="text-sm uppercase tracking-[0.22em] text-red-300">Admin access</p>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">Operations login</h1>
        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" defaultValue="ops@lifegrid.ai" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500" defaultValue="admin123" />
          </div>
          <button className="w-full rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-400">
            Sign in to dashboard
          </button>
        </form>
      </div>
    </main>
  );
}
