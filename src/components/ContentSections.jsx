import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ContentSections() {
  return (
    <div className="bg-slate-950">
      <About />
      <HowItWorks />
      <Industries />
      <Consultation />
    </div>
  );
}

function About() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Built for trust, designed for speed</h2>
        <p className="mt-4 text-white/70">
          Instacertify brings together issuance, compliance, and verification so your organization can move faster—without compromising on integrity.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: 'Design',
      desc: 'Create on-brand certificates and badges with templates or custom designs.',
    },
    {
      title: 'Issue',
      desc: 'Bulk issue to recipients and notify them instantly via email or link.',
    },
    {
      title: 'Verify',
      desc: 'Share secure URLs or scan QR codes—anyone can verify authenticity in seconds.',
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-white">How it works</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="h-6 w-6 text-emerald-300" />
              <h4 className="mt-3 text-lg font-semibold text-white">{s.title}</h4>
              <p className="mt-1 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = ['Education', 'Healthcare', 'Fintech', 'Enterprise', 'Government', 'Memberships'];
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-white">Trusted across industries</h3>
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((x) => (
            <div key={x} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-white/80">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Consultation() {
  const [status, setStatus] = useState('idle');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('success');
  }

  return (
    <section id="consult" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Book a consultation</h3>
          <p className="mt-1 text-white/70">Tell us a bit about your use case and we’ll reach out with next steps.</p>
          {status === 'success' ? (
            <div className="mt-6 rounded-lg border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-200">
              Thanks! Your request has been received. We’ll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" required className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Company</label>
                <input className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Acme Inc." />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Use case</label>
                <textarea rows={4} className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Tell us what you want to build..." />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition">
                  Request call
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
