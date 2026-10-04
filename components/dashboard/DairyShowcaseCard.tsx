'use client';

import React from 'react';

/**
 * PRACTICAL 1: HTML Headings, Ordered/Unordered Lists and Images (<figure>, <img>, <figcaption>, <h2>, <ol>, <ul>)
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <article>, <figure>, <header>, <footer>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS (Gradients, borders, badges, typography)
 * PRACTICAL 4: Flexbox, CSS Grid and Responsive Breakpoints (grid-cols-1 lg:grid-cols-12)
 * PRACTICAL 5: CSS Positioning (relative, absolute overlay badges)
 */
export default function DairyShowcaseCard() {
  return (
    <section
      aria-label="Cooperative Facility and Operations Quality"
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Dairy Chilling Center Visual with Semantic <figure>, <img> & <figcaption> - Practical 1 & 2 */}
        <div className="lg:col-span-5 relative group">
          <figure className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900">
            {/* Semantic Dairy Visual Image with Meaningful Alt - Practical 1 */}
            <img
              src="https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=900&auto=format&fit=crop&q=80"
              alt="High-grade stainless steel milk processing tanks and cold storage tanks at Central Dairy Cooperative Plant"
              className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
              loading="lazy"
              onError={(e) => {
                // High-quality SVG fallback if network blocks external images
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&auto=format&fit=crop&q=80';
              }}
            />

            {/* Absolute Status Badge overlay - Practical 5 (absolute positioning, z-10) */}
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Chilling Silo Station #02
              </span>
            </div>

            {/* Semantic Caption - Practical 1 & 2 */}
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 text-white text-xs">
              <p className="font-semibold text-sm">Automated Rapid Chilling (3.8°C)</p>
              <p className="text-slate-300 text-[11px] mt-0.5">
                Preserving milk freshness within 45 minutes of farmer farm-gate collection.
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Right Side: Operational Standard Operating Procedure (SOP) - Practical 1 (Headings & Lists) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Quality Assurance Protocol
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
              Farm-to-Chiller Transparency Framework
            </h2>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              Every liter collected passes through a three-stage automated inspection pipeline before entry into the bulk storage silos.
            </p>
          </div>

          {/* Practical 1: Ordered List (<ol>) representing Sequential Milk Verification Process */}
          <ol className="space-y-3">
            <li className="flex items-start gap-3 text-xs sm:text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                1
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold">
                  Electronic Weight & RFID Identification
                </strong>
                <span className="text-slate-500">
                  Farmer ID RFID card scanned; ESSAE digital scale logs gross tare weight automatically.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3 text-xs sm:text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                2
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold">
                  Ultrasonic Fat & SNF Spectrometry
                </strong>
                <span className="text-slate-500">
                  Automated suction probe analyzes Fat %, SNF %, and tests for water or chemical adulteration.
                </span>
              </div>
            </li>

            <li className="flex items-start gap-3 text-xs sm:text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                3
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold">
                  Instant SMS Slip & UPI Auto-Settlement
                </strong>
                <span className="text-slate-500">
                  Thermal slip generated with rate calculations; transaction queued for direct bank disbursement.
                </span>
              </div>
            </li>
          </ol>

          {/* Feature highlights bullet tags - Practical 1 (Unordered List) */}
          <ul className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <li className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
              <span>Zero Manual Intervention</span>
            </li>
            <li className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
              <span>Direct Farmer Empowerment</span>
            </li>
            <li className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
              <span>Government Dairy Norms Aligned</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
