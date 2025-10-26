import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';

export default function TestimonialsFAQ() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
        <Testimonials />
        <FAQ />
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        'Instacertify helped us automate certificate issuance and reduce verification requests by 80%. Our teams love it.',
      author: 'Director of Compliance, Fintech Co.',
    },
    {
      quote:
        'The verification links and QR codes are a game-changer. Our recipients share them everywhere.',
      author: 'Program Manager, Education Group',
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white">What customers say</h3>
      <div className="mt-6 grid gap-6">
        {items.map((t, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-1 text-yellow-300">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
              ))}
            </div>
            <p className="mt-3 text-white/80">“{t.quote}”</p>
            <div className="mt-2 text-sm text-white/60">{t.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const qas = [
    {
      q: 'How does verification work?',
      a: 'Each credential includes a cryptographic signature and a unique link or QR code. Anyone can open the link to instantly validate authenticity and details.',
    },
    {
      q: 'Can we import existing recipients?',
      a: 'Yes. You can bulk import via CSV or API and then issue credentials in batches with automated notifications.',
    },
    {
      q: 'Is this compliant with our industry?',
      a: 'Instacertify maps workflows to industry standards and maintains detailed audit trails to help with regulatory reviews.',
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white">FAQs</h3>
      <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {qas.map((item, i) => (
          <button
            key={item.q}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full text-left px-5 py-4 focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{item.q}</span>
              <ChevronDown className={`h-5 w-5 text-white transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </div>
            {open === i && (
              <p className="mt-2 text-white/70">{item.a}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
