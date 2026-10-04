import React from 'react';
import { KPI_DATA } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings, Paragraphs and Subtitles
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <header>, <article>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: CSS Grid, Flexbox and Responsive Breakpoints
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function KpiCards() {
  return (
    <section aria-label="Key Performance Indicators" className="w-full">
      <header className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Key Operational Telemetry
          </h2>
          <p className="text-xs text-slate-500">
            Real-time procurement metrics for current collection shift
          </p>
        </div>
        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          Auto-Synced
        </span>
      </header>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop, 6 on 2xl - Practical 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4">
        {KPI_DATA.map((kpi) => {
          // Color Theme Tokens
          const colorStyles = {
            emerald: {
              iconBg: 'bg-emerald-100 text-emerald-800',
              trendColor: 'text-emerald-700',
              borderHover: 'hover:border-emerald-300',
            },
            sky: {
              iconBg: 'bg-sky-100 text-sky-800',
              trendColor: 'text-sky-700',
              borderHover: 'hover:border-sky-300',
            },
            amber: {
              iconBg: 'bg-amber-100 text-amber-800',
              trendColor: 'text-amber-700',
              borderHover: 'hover:border-amber-300',
            },
            rose: {
              iconBg: 'bg-rose-100 text-rose-800',
              trendColor: 'text-rose-700',
              borderHover: 'hover:border-rose-300',
            },
            indigo: {
              iconBg: 'bg-indigo-100 text-indigo-800',
              trendColor: 'text-indigo-700',
              borderHover: 'hover:border-indigo-300',
            },
            slate: {
              iconBg: 'bg-slate-100 text-slate-800',
              trendColor: 'text-slate-700',
              borderHover: 'hover:border-slate-300',
            },
          }[kpi.colorTheme];

          return (
            /* Semantic <article> element for each self-contained metric card - Practical 2 */
            <article
              key={kpi.id}
              className={`bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md ${colorStyles.borderHover}`}
            >
              {/* Card Header: Title & Icon */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">
                  {kpi.title}
                </h3>
                <span className={`p-2 rounded-xl flex items-center justify-center ${colorStyles.iconBg}`}>
                  <span className="material-symbols-outlined text-lg">{kpi.icon}</span>
                </span>
              </div>

              {/* Main Metric Value & Unit (Practical 1 & 3: Tabular numerals) */}
              <div className="my-3">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    {kpi.value}
                  </span>
                  {kpi.unit && (
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {kpi.unit}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {kpi.subtitle}
                </p>
              </div>

              {/* Optional Progress Bar for Farmer Turnout */}
              {kpi.progressValue !== undefined && (
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-2.5">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${kpi.progressValue}%` }}
                    role="progressbar"
                    aria-valuenow={kpi.progressValue}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              )}

              {/* Card Footer: Trend Indicator */}
              <div className={`flex items-center gap-1.5 text-xs font-semibold ${colorStyles.trendColor}`}>
                {kpi.trendDirection === 'up' && (
                  <span className="material-symbols-outlined text-base">trending_up</span>
                )}
                {kpi.trendDirection === 'neutral' && (
                  <span className="material-symbols-outlined text-base">info</span>
                )}
                <span className="truncate">{kpi.trend}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
