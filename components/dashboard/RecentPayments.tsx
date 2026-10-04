import React from 'react';
import { RECENT_PAYMENTS } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings, Paragraphs and Lists
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <header>, <article>, <ul>, <li>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function RecentPayments() {
  return (
    <section aria-label="Direct Bank Payouts Activity" className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
      {/* Header (Practical 2) */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
              <span className="material-symbols-outlined text-lg">account_balance</span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Recent Bank Disbursals & Settlement Feed
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Automated direct bank credit (NEFT / IMPS / UPI) status for milk batches
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          Auto-Pay Gateway Connected
        </span>
      </header>

      {/* Semantic Unordered List of Recent Payments - Practical 1 & 2 */}
      <ul className="divide-y divide-slate-100">
        {RECENT_PAYMENTS.map((payment) => (
          <li key={payment.id} className="py-3.5 first:pt-0 last:pb-0">
            <article className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Left: Bank Icon + Farmer info */}
              <div className="flex items-start sm:items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">account_balance</span>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-900 text-sm">
                      {payment.farmerName}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">
                      ({payment.farmerId})
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                      {payment.paymentMode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5 flex-wrap">
                    <span>{payment.bankName}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-mono text-[11px]">UTR: {payment.utrNumber}</span>
                  </div>
                </div>
              </div>

              {/* Right: Payment Amount & Status */}
              <div className="flex items-center justify-between sm:justify-end sm:text-right gap-3 pl-13 sm:pl-0">
                <div className="flex flex-col sm:items-end">
                  <span className="font-mono font-extrabold text-slate-900 text-base tabular-nums">
                    ₹{payment.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Transferred at {payment.timestamp}
                  </span>
                </div>

                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    payment.status === 'Settled'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    {payment.status === 'Settled' ? 'done_all' : 'hourglass_top'}
                  </span>
                  {payment.status}
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
