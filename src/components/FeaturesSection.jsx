import React from 'react';
import { Dna, FlaskConical, ShieldCheck, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: Dna,
    title: 'Scientific accuracy',
    desc: 'A dynamic DNA double helix visualization that communicates complex ideas clearly and beautifully.'
  },
  {
    icon: FlaskConical,
    title: 'For research & labs',
    desc: 'Ideal for biotech and healthcare brands that want modern, credible visual storytelling.'
  },
  {
    icon: GraduationCap,
    title: 'Education-ready',
    desc: 'Engage learners with motion and depth that turn abstract concepts into memorable experiences.'
  },
  {
    icon: ShieldCheck,
    title: 'Fast & accessible',
    desc: 'Built with performance and accessibility in mind for a smooth experience across devices.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why Oasis</h2>
          <p className="mt-3 text-slate-600">A focused toolkit to showcase scientific content with clarity and impact.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-pink-500 via-rose-500 to-indigo-500 text-white grid place-items-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
