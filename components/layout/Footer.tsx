import React from 'react';
import { COOPERATIVE_INFO } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings, Lists and Links
 * PRACTICAL 2: Semantic HTML5 Elements (<footer>, <section>, <ul>, <small>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-6 px-4 sm:px-6 lg:px-8 mt-auto text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Branding & College Project Tag */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>{COOPERATIVE_INFO.name}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-500 font-medium">
            College Academic Project • IT / Computer Engineering
          </span>
        </div>

        {/* Center / Right: Practicals Aligned Pill Tags - Practical 1 & 2 */}
        <div className="flex items-center flex-wrap justify-center gap-2">
          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200">
            Practicals 1–5 Aligned
          </span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-mono text-[11px] border border-emerald-200">
            Semantic HTML5 • Responsive CSS
          </span>
        </div>

        {/* Copyright & System Build */}
        <div className="text-slate-500 text-center md:text-right">
          <p>© {new Date().getFullYear()} Digital Dairy Cooperative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
