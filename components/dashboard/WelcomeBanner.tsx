'use client';

import React, { useState, useEffect } from 'react';
import { COOPERATIVE_INFO } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings and Lists
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <header>, <ul>, <li>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox, CSS Grid and Responsive Breakpoints
 * PRACTICAL 5: CSS Positioning (relative, absolute)
 */
export default function WelcomeBanner() {
  const [shiftSeconds, setShiftSeconds] = useState(9840); // 2h 44m initial

  useEffect(() => {
    const timer = setInterval(() => {
      setShiftSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatShiftTimer = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <section
      aria-label="Welcome and Shift Status"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs relative overflow-hidden"
    >
      {/* Decorative background gradient accent - Practical 5 (absolute positioning) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/50 via-sky-50/40 to-transparent rounded-full pointer-events-none -mr-20 -mt-20 blur-2xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Welcome Greeting & Station Context (Practical 1: Headings & Paragraphs) */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {COOPERATIVE_INFO.activeShift} Active
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {COOPERATIVE_INFO.shiftTiming}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, {COOPERATIVE_INFO.manager.name} 👋
          </h2>

          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            Telemetry stream is active for <strong className="text-slate-800">{COOPERATIVE_INFO.branch}</strong>. All IoT weigh scales and laboratory milk analyzers are online and synced.
          </p>

          {/* Telemetry Hardware Connectivity Badges (Practical 1: Unordered List) */}
          <ul className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
            <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 font-medium border border-slate-200/60">
              <span className="material-symbols-outlined text-sm text-emerald-600">bluetooth_connected</span>
              <span>Weigh Scale: <strong className="text-emerald-700">ESSAE DS-215</strong></span>
            </li>
            <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 font-medium border border-slate-200/60">
              <span className="material-symbols-outlined text-sm text-sky-600">sensors</span>
              <span>Fat Analyzer: <strong className="text-sky-700">Online</strong></span>
            </li>
            <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-mono font-semibold border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              <span>Live Shift Clock: {formatShiftTimer(shiftSeconds)}</span>
            </li>
          </ul>
        </div>

        {/* Quick Action CTAs (Practical 4: Flexbox / Grid Layout) */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 flex-shrink-0">
          <a
            href="#milk-collection"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md shadow-emerald-700/25 transition-all active:scale-95 text-center"
          >
            <span className="material-symbols-outlined text-xl">add_circle</span>
            <span>+ New Milk Intake</span>
          </a>

          <a
            href="#farmers"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs transition-all active:scale-95 text-center"
          >
            <span className="material-symbols-outlined text-xl text-emerald-700">person_add</span>
            <span>Add Farmer</span>
          </a>

          <a
            href="#payments"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs transition-all active:scale-95 text-center"
          >
            <span className="material-symbols-outlined text-xl text-sky-600">payments</span>
            <span>Payouts</span>
          </a>
        </div>
      </div>
    </section>
  );
}
