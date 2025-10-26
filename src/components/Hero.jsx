import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(120,119,198,0.25),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Instacertify
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Issue and verify credentials instantly
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-prose">
              The modern credentialing platform for brands that value trust. Automate issuance, ensure compliance, and enable one‑click verification with delightful, secure experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#consult" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-lg transition">
                <Rocket className="h-5 w-5" />
                Book a consultation
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition">
                <Shield className="h-5 w-5" />
                Explore the platform
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Uptime', value: '99.99%' },
                { label: 'Verifications', value: '10M+' },
                { label: 'Customers', value: '2k+' },
                { label: 'Regions', value: '40+' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center">
                  <div className="text-xl font-semibold text-white">{item.value}</div>
                  <div className="text-xs uppercase tracking-wide text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
