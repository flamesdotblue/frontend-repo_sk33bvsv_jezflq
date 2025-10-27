import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-pink-500 via-rose-500 to-indigo-500" />
          <span className="text-sm font-semibold text-slate-800">Oasis</span>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Oasis. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <a href="#privacy" className="hover:text-slate-900">Privacy</a>
          <a href="#terms" className="hover:text-slate-900">Terms</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
