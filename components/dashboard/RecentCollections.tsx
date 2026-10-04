'use client';

import React from 'react';
import { RECENT_INTAKES } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings, Tables, Lists and Images (Farmer portrait images with alt attributes)
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <header>, <article>, <table>, <thead>, <tbody>, <tr>, <th>, <td>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Responsive Breakpoints and Flexbox
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function RecentCollections() {
  return (
    <section aria-label="Recent Milk Intake Stream" className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
      {/* Section Header (Practical 2) */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Recent Milk Intake Stream
            </h3>
            <p className="text-xs text-slate-500">
              Live batch entries captured from automated weigh-scale & lactometer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Showing last 6 of 318 entries</span>
          <button
            type="button"
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline px-2 py-1 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            View Full Ledger →
          </button>
        </div>
      </header>

      {/* Desktop / Tablet Table View (Practical 1: Tables & Images; Practical 2: Semantic Table elements) */}
      <div className="overflow-x-auto -mx-5 sm:mx-0">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-600 uppercase text-[11px] font-bold tracking-wider">
              <th scope="col" className="py-3 px-4 rounded-l-xl">Farmer Info</th>
              <th scope="col" className="py-3 px-3">Cattle Type</th>
              <th scope="col" className="py-3 px-3 text-right">Quantity</th>
              <th scope="col" className="py-3 px-3 text-right">Fat %</th>
              <th scope="col" className="py-3 px-3 text-right">SNF %</th>
              <th scope="col" className="py-3 px-3 text-right">Rate/L</th>
              <th scope="col" className="py-3 px-4 text-right">Total Payable</th>
              <th scope="col" className="py-3 px-3 text-center">Time</th>
              <th scope="col" className="py-3 px-4 text-center rounded-r-xl">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RECENT_INTAKES.map((record) => (
              <tr
                key={record.id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                {/* Farmer identity with image - Practical 1 */}
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={record.avatarUrl}
                      alt={`Farmer ${record.farmerName}`}
                      className="w-9 h-9 rounded-full object-cover ring-1 ring-slate-200 flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                        const fallback = (e.target as HTMLElement).nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                      {record.farmerName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-emerald-700">
                          {record.farmerId}
                        </span>
                        <span className="font-semibold text-slate-900 truncate">
                          {record.farmerName}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block truncate">
                        {record.cluster}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Cattle Type Badge */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      record.cattleType === 'Cow'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-sky-50 text-sky-800 border border-sky-200'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        record.cattleType === 'Cow' ? 'bg-emerald-600' : 'bg-sky-600'
                      }`}
                    ></span>
                    {record.cattleType}
                  </span>
                </td>

                {/* Volume (Liters) */}
                <td className="py-3 px-3 text-right font-mono font-bold text-slate-900 tabular-nums whitespace-nowrap">
                  {record.quantityLiters.toFixed(1)} L
                </td>

                {/* Fat % */}
                <td className="py-3 px-3 text-right font-mono font-medium text-slate-700 tabular-nums whitespace-nowrap">
                  {record.fatPercent.toFixed(1)}%
                </td>

                {/* SNF % */}
                <td className="py-3 px-3 text-right font-mono font-medium text-slate-700 tabular-nums whitespace-nowrap">
                  {record.snfPercent.toFixed(1)}%
                </td>

                {/* Rate per Liter */}
                <td className="py-3 px-3 text-right font-mono text-slate-600 tabular-nums whitespace-nowrap">
                  ₹{record.ratePerLiter.toFixed(2)}
                </td>

                {/* Total Calculated Amount */}
                <td className="py-3 px-4 text-right font-mono font-extrabold text-emerald-700 tabular-nums whitespace-nowrap">
                  ₹{record.totalAmount.toFixed(2)}
                </td>

                {/* Intake Timestamp */}
                <td className="py-3 px-3 text-center text-xs text-slate-500 font-medium whitespace-nowrap">
                  {record.collectionTime}
                </td>

                {/* Status chip */}
                <td className="py-3 px-4 text-center whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                    <span className="material-symbols-outlined text-xs">check</span>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
