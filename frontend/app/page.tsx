import Link from 'next/link';
import { ArrowRight, BellRing, BrainCircuit, ChevronRight, Clock3, ShieldCheck, Siren, Zap } from 'lucide-react';
import { Header } from '@/components/layout/header';

const emergencyCategories = [
  'Medical Emergencies',
  'Fire & Hazard Incidents',
  'Traffic & Road Safety',
  'Natural Disasters',
  'Utility Failures',
  'Security Threats',
];

const features = [
  { icon: BrainCircuit, title: 'AI triage', text: 'Instant classifying and reasoning for severity-based emergency triage.' },
  { icon: BellRing, title: 'Escalation automations', text: 'Trigger alerts, dispatch workflows, and cross-team coordination.' },
  { icon: ShieldCheck, title: 'Live monitoring', text: 'Track active incidents, flagged duplicates, and team assignments in real time.' },
  { icon: Zap, title: 'Faster response', text: 'Reduce response lag with prioritized queueing and recommendations.' },
];

const steps = [
  { title: 'Report', text: 'Citizens file emergency details through a structured mobile-friendly workflow.' },
  { title: 'Classify', text: 'AI engine analyzes type, urgency, and context to assign a severity rating.' },
  { title: 'Coordinate', text: 'Response teams receive alerts and route actions through automation flows.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <Header />

      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div className="grid-pattern absolute inset-0 opacity-60" />
        <div className="container-shell relative grid items-center gap-12 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-200">
              <Siren className="h-4 w-4" />
              Rapid emergency intelligence
            </div>
            <h1 className="max-w-xl text-5xl font-black leading-[1.02] tracking-[-0.07em] text-white md:text-6xl">
              Every Second Matters. Every Response Counts.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              An intelligent emergency coordination platform designed to classify incidents, prioritize urgent situations, and coordinate response teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/citizen/report" className="inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400">
                Report an Emergency
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/citizen/track" className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500">
                Track Incident
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div><span className="text-2xl font-bold text-white">4.8x</span> faster triage</div>
              <div><span className="text-2xl font-bold text-white">24/7</span> monitoring</div>
              <div><span className="text-2xl font-bold text-white">AI</span> escalations</div>
            </div>
          </div>

          <div className="card rounded-3xl p-6">
            <div className="rounded-2xl bg-slate-900 p-5 ring-1 ring-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Command status</p>
                  <h2 className="mt-2 text-3xl font-bold text-white">Live operations</h2>
                </div>
                <span className="status-pill bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30">Online</span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  { label: 'Critical incidents', value: '18', tone: 'text-red-300', dot: 'bg-red-500' },
                  { label: 'Active responders', value: '42', tone: 'text-amber-300', dot: 'bg-amber-500' },
                  { label: 'Resolved today', value: '126', tone: 'text-emerald-300', dot: 'bg-emerald-500' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
                      <span className="text-slate-300">{item.label}</span>
                    </div>
                    <span className={`text-xl font-bold ${item.tone}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container-shell py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-red-300">How it works</p>
          <h2 className="section-title mt-4 text-white">Built for critical response coordination</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="card rounded-3xl p-7">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-lg font-bold text-red-300 ring-1 ring-red-500/20">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-slate-800 bg-slate-950/50">
        <div className="container-shell py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-red-300">Emergency categories</p>
            <h2 className="section-title mt-4 text-white">Prioritized response by incident type</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyCategories.map((category) => (
              <div key={category} className="card rounded-2xl p-5 text-slate-200">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20">
                  <Clock3 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category}</h3>
                <p className="mt-2 text-sm text-slate-400">Fast routing, escalation logic, and action prioritization.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-red-300">Severity model</p>
          <h2 className="section-title mt-4 text-white">Intelligent triage and escalation logic</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            { level: 'Level 1', title: 'Critical', desc: 'Immediate dispatch and senior coordinator response.' },
            { level: 'Level 2', title: 'High', desc: 'Escalate within minutes to nearest field teams.' },
            { level: 'Level 3', title: 'Moderate', desc: 'Coordinate response and monitor active updates.' },
            { level: 'Level 4', title: 'Low', desc: 'Track quickly and report for routine handling.' },
          ].map((item) => (
            <div key={item.level} className="card rounded-2xl p-6">
              <div className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-400">{item.level}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-red-300">Platform features</p>
          <h2 className="section-title mt-4 text-white">A forensic, operational response hub</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="card rounded-3xl p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-300 ring-1 ring-red-500/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
