'use client';

import React from 'react';
import { Farmer } from '@/lib/sampleData';

interface FarmerSummaryCardsProps {
  farmers: Farmer[];
}

/**
 * PRACTICAL 1: HTML Headings and Metric Labels
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <article>, <header>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS & Stitch Design Tokens
 * PRACTICAL 4: CSS Grid and Responsive Layout (1 col mobile, 2 col tablet, 4 col desktop)
 * PRACTICAL 5: CSS Positioning and Styling
 */
export default function FarmerSummaryCards({ farmers }: FarmerSummaryCardsProps) {
  const totalCount = farmers.length;
  const activeCount = farmers.filter((f) => f.status === 'Active').length;
  const inactiveCount = farmers.filter((f) => f.status === 'Inactive').length;
  const pendingFarmers = farmers.filter((f) => f.paymentStatus === 'Pending');
  const pendingCount = pendingFarmers.length;
  const totalPendingAmount = pendingFarmers.reduce((acc, f) => acc + (f.pendingAmount || 0), 0);

  const activePercent = totalCount > 0 ? Math.round((activeCount / totalCount) * 100) : 0;

  const cards = [
    {
      id: 'total',
      title: 'Total Farmers',
      value: totalCount.toString(),
      subtitle: `${activeCount} actively delivering today`,
      icon: 'groups',
      color: 'emerald',
      badge: 'Registered',
    },
    {
      id: 'active',
      title: 'Active Farmers',
      value: activeCount.toString(),
      subtitle: `${activePercent}% cooperative participation`,
      icon: 'how_to_reg',
      color: 'sky',
      badge: `${activePercent}% Rate`,
    },
    {
      id: 'inactive',
      title: 'Inactive Farmers',
      value: inactiveCount.toString(),
      subtitle: 'Dry period / medical leave',
      icon: 'person_off',
      color: 'amber',
      badge: 'Needs Review',
    },
    {
      id: 'pending-payments',
      title: 'Pending Payments',
      value: pendingCount.toString(),
      subtitle: `₹${totalPendingAmount.toLocaleString('en-IN')} total due`,
      icon: 'pending_actions',
      color: 'rose',
      badge: 'Due Friday',
    },
  ];

  return (
    <section aria-label="Farmers Directory Telemetry" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const styles = {
            emerald: {
              iconBg: 'bg-emerald-100 text-emerald-800',
              borderHover: 'hover:border-emerald-300',
              badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            },
            sky: {
              iconBg: 'bg-sky-100 text-sky-800',
              borderHover: 'hover:border-sky-300',
              badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
            },
            amber: {
              iconBg: 'bg-amber-100 text-amber-800',
              borderHover: 'hover:border-amber-300',
              badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
            },
            rose: {
              iconBg: 'bg-rose-100 text-rose-800',
              borderHover: 'hover:border-rose-300',
              badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
            },
          }[card.color as 'emerald' | 'sky' | 'amber' | 'rose'];

          return (
            <article
              key={card.id}
              className={`bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md ${styles.borderHover}`}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">
                  {card.title}
                </h3>
                <span className={`p-2 rounded-xl flex items-center justify-center ${styles.iconBg}`}>
                  <span className="material-symbols-outlined text-lg">{card.icon}</span>
                </span>
              </div>

              <div className="my-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  {card.value}
                </span>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {card.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${styles.badgeBg}`}>
                  {card.badge}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Updated live</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
