import React from 'react';
import { QUALITY_SUMMARY, COLLECTION_TRENDS } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings, Paragraphs and Lists
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <article>, <header>, <ul>, <li>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox, CSS Grid and Responsive Layout
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function MilkCollectionOverview() {
  const maxVolume = Math.max(...COLLECTION_TRENDS.map((t) => t.totalVolume));

  return (
    <article className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
      {/* Card Header (Practical 2) */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
              <span className="material-symbols-outlined text-lg">water_drop</span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Milk Collection & Quality Overview
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated laboratory testing & weighted batch telemetry
          </p>
        </div>

        {/* Quality Certification Badge */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <span className="material-symbols-outlined text-sm">verified</span>
            {QUALITY_SUMMARY.laboratoryGrade}
          </span>
        </div>
      </header>

      {/* 1. Cow vs Buffalo Composition Split Bar (Practical 4: Flexbox) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-emerald-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Cow Milk ({QUALITY_SUMMARY.cowLiters.toLocaleString()} L • {QUALITY_SUMMARY.cowPercent}%)
          </span>
          <span className="flex items-center gap-1.5 text-sky-800">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
            Buffalo Milk ({QUALITY_SUMMARY.buffaloLiters.toLocaleString()} L • {QUALITY_SUMMARY.buffaloPercent}%)
          </span>
        </div>

        {/* Multi-segment Progress Bar */}
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
          <div
            className="bg-emerald-600 h-full transition-all duration-500"
            style={{ width: `${QUALITY_SUMMARY.cowPercent}%` }}
            title={`Cow Milk: ${QUALITY_SUMMARY.cowPercent}%`}
          ></div>
          <div
            className="bg-sky-600 h-full transition-all duration-500"
            style={{ width: `${QUALITY_SUMMARY.buffaloPercent}%` }}
            title={`Buffalo Milk: ${QUALITY_SUMMARY.buffaloPercent}%`}
          ></div>
        </div>
      </div>

      {/* 2. 3-Pillar Laboratory Diagnostic Metrics (Practical 4: CSS Grid) */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Avg Fat
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">
            {QUALITY_SUMMARY.avgFat} %
          </span>
          <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">
            Target ≥ 4.0%
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Avg SNF
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">
            {QUALITY_SUMMARY.avgSnf} %
          </span>
          <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">
            Target ≥ 8.5%
          </span>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-center">
          <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block">
            Avg Rate
          </span>
          <span className="text-lg sm:text-xl font-bold text-emerald-800 tabular-nums">
            ₹{QUALITY_SUMMARY.avgRate.toFixed(2)}
          </span>
          <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">
            Per Liter (INR)
          </span>
        </div>
      </div>

      {/* 3. 7-Day Volume Intake Velocity Bar Chart (Practical 1 & 4) */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-emerald-600">bar_chart</span>
            7-Day Volume Intake Trend (Liters)
          </span>
          <span className="font-mono text-emerald-700 font-semibold">
            +18.2% Weekly Velocity
          </span>
        </div>

        {/* Visual Bar representation using CSS Grid / Flexbox - Practical 4 */}
        <div className="grid grid-cols-7 gap-2 items-end h-28 pt-4 pb-1 px-1">
          {COLLECTION_TRENDS.map((item) => {
            const heightPercent = Math.round((item.totalVolume / maxVolume) * 100);
            const isToday = item.day === 'Sun';

            return (
              <div key={item.day} className="flex flex-col items-center h-full justify-end group">
                <div
                  className="w-full max-w-[28px] rounded-t-md transition-all duration-300 relative flex items-center justify-center cursor-pointer"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: isToday ? '#15803d' : '#cbd5e1',
                  }}
                  title={`${item.day} (${item.fullDate}): ${item.totalVolume.toLocaleString()} Liters`}
                >
                  {/* Tooltip on hover - Practical 5 (absolute positioning) */}
                  <span className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap z-20">
                    {item.totalVolume} L
                  </span>
                </div>
                <span
                  className={`text-[11px] font-medium mt-1.5 truncate ${
                    isToday ? 'text-emerald-700 font-bold' : 'text-slate-500'
                  }`}
                >
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Silo Tank & Adulteration Purity Banner */}
      <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs text-slate-600 border border-slate-100">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-sky-600">ac_unit</span>
          <span>Chilling Silo Tank #1: <strong className="text-slate-800">3.8°C (Optimal)</strong></span>
        </div>
        <span className="font-semibold text-emerald-700">100% Purity Passed</span>
      </div>
    </article>
  );
}
