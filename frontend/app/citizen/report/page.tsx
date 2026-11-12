import { ReportForm } from '@/components/forms/report-form';

export default function CitizenReportPage() {
  return (
    <main className="container-shell py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">Incident reporting</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white">Report an emergency</h1>
          <p className="mt-4 text-slate-300">
            Submit time-sensitive incident details to trigger classification, prioritization, and response workflows.
          </p>
        </div>
        <ReportForm />
      </div>
    </main>
  );
}
