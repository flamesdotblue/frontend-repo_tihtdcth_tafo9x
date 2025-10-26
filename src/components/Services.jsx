import { ShieldCheck, BadgeCheck, Zap } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Compliance Automation',
    desc: 'Map your credential workflows to regulatory standards and automate expiration, renewals, and audit trails.',
  },
  {
    icon: BadgeCheck,
    title: 'Credential Issuance',
    desc: 'Bulk issue digital certificates and badges with brand-perfect designs, QR codes, and secure links.',
  },
  {
    icon: Zap,
    title: 'Trust & Verification',
    desc: 'Tamper-evident signatures and instant verification experiences that your recipients can share anywhere.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Instacertify pillars</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to issue and verify credentials—fast, compliant, and delightful.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
              <div className="mt-4 text-sm text-indigo-300 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
