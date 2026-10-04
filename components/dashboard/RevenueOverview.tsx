import React from 'react';
import { REVENUE_BREAKDOWN } from '@/lib/sampleData';

/**
 * PRACTICAL 1: HTML Headings, Paragraphs and Lists
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <article>, <header>, <ul>, <li>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function RevenueOverview() {
  return (
    <article className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
      {/* Card Header (Practical 2) */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-sky-100 text-sky-800">
              <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Revenue & Financial Overview
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Procurement expenditure vs commercial distribution ledger
          </p>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 self-start sm:self-auto">
          Daily Financial Cycle
        </span>
      </header>

      {/* Financial Core Numbers Grid (Practical 4: CSS Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Procurement Payouts
          </span>
          <span className="text-xl font-extrabold text-slate-900 tracking-tight tabular-nums block mt-1">
            ₹{REVENUE_BREAKDOWN.dailyProcurement.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
          <span className="text-[11px] text-slate-500 block mt-0.5">
            Paid to 318 farmers
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
            Wholesale Revenue
          </span>
          <span className="text-xl font-extrabold text-sky-700 tracking-tight tabular-nums block mt-1">
            ₹{REVENUE_BREAKDOWN.commercialWholesale.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
          <span className="text-[11px] text-sky-600 block mt-0.5">
            B2B & retail booths
          </span>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
          <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">
            Estimated Daily Margin
          </span>
          <span className="text-xl font-extrabold text-emerald-700 tracking-tight tabular-nums block mt-1">
            +₹{REVENUE_BREAKDOWN.netOperatingMargin.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
          <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">
            24.3% Operating spread
          </span>
        </div>
      </div>

      {/* Payment Settlement Methods Breakdown (Practical 1: Unordered List & Headings) */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-sky-600">pie_chart</span>
            Automated Settlement Channels
          </span>
          <span className="text-slate-500 font-normal">Real-time RTGS / UPI</span>
        </div>

        <ul className="space-y-2.5">
          {REVENUE_BREAKDOWN.paymentMethods.map((method) => (
            <li key={method.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-700">{method.name}</span>
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-slate-900 font-semibold">{method.amount}</span>
                  <span className="text-slate-400 font-normal">({method.percent}%)</span>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${method.color}`}
                  style={{ width: `${method.percent}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Auto-Disbursement Guarantee Notice */}
      <div className="p-3 bg-emerald-50/70 rounded-xl flex items-center justify-between text-xs text-emerald-800 border border-emerald-100">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-base text-emerald-600">verified_user</span>
          <span>Farmer Payout Cycle: <strong>Weekly Direct Credit (Every Friday)</strong></span>
        </div>
        <span className="font-bold underline cursor-pointer hover:text-emerald-900">Details</span>
      </div>
    </article>
  );
}
