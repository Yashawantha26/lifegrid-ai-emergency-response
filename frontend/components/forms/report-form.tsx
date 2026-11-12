'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  reporterName: z.string().min(2, 'Name is required'),
  location: z.string().min(5, 'Location is required'),
  category: z.string().min(1, 'Select a category'),
  severity: z.string().min(1, 'Select a severity'),
  details: z.string().min(10, 'Describe the incident in more detail'),
});

type FormValues = z.infer<typeof schema>;

export function ReportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    console.log('Emergency report submitted:', values);
    alert('Emergency report captured. AI triage workflow has been queued.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card rounded-3xl p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-slate-300">Reporter name</label>
          <input {...register('reporterName')} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Jordan Lee" />
          {errors.reporterName && <p className="mt-2 text-sm text-red-300">{errors.reporterName.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Location</label>
          <input {...register('location')} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Street / district / landmark" />
          {errors.location && <p className="mt-2 text-sm text-red-300">{errors.location.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Incident category</label>
          <select {...register('category')} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none">
            <option value="">Select category</option>
            <option value="medical">Medical</option>
            <option value="fire">Fire</option>
            <option value="traffic">Traffic</option>
            <option value="utility">Utility</option>
            <option value="security">Security</option>
          </select>
          {errors.category && <p className="mt-2 text-sm text-red-300">{errors.category.message}</p>}
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Severity</label>
          <select {...register('severity')} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none">
            <option value="">Select severity</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          {errors.severity && <p className="mt-2 text-sm text-red-300">{errors.severity.message}</p>}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">Incident details</label>
        <textarea {...register('details')} rows={6} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Describe the incident, hazards, persons involved, and urgency." />
        {errors.details && <p className="mt-2 text-sm text-red-300">{errors.details.message}</p>}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">AI triage preview</div>
          <div className="mt-2 text-lg font-semibold text-white">Auto-prioritization enabled</div>
        </div>
        <button type="submit" className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400">
          Submit report
        </button>
      </div>
    </form>
  );
}
