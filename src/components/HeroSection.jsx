import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full" style={{ minHeight: 'calc(100vh - 64px)' }}>
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          Vibrant biotech visuals, powered by 3D
        </div>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-3xl">
          Bring science to life with an interactive DNA experience
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl">
          A modern, educational hero built with a real-time 3D animation of a DNA double helix. Perfect for healthcare, biotech, and learning platforms.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition-colors"
          >
            Explore the platform
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-white/90 text-slate-900 px-6 py-3 text-sm font-semibold shadow border border-slate-200 hover:bg-white transition-colors"
          >
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
