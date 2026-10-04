'use client';

import React, { useState } from 'react';
import { NAVIGATION_ITEMS } from '@/lib/sampleData';

interface MobileNavProps {
  currentPath?: string;
  onOpenSidebar: () => void;
}

/**
 * PRACTICAL 1: HTML Headings, Lists and Links
 * PRACTICAL 2: Semantic HTML5 Elements (<nav>, <ul>, <li>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Responsive Design
 * PRACTICAL 5: CSS Positioning (fixed bottom-0, z-index: 40)
 */
export default function MobileNav({ currentPath = 'dashboard', onOpenSidebar }: MobileNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Off-canvas Full Mobile Drawer - Practical 5 (fixed positioning, z-50) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-700 text-2xl">apps</span>
            <span className="font-bold text-slate-900 text-base">All Modules</span>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            aria-label="Close menu drawer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Semantic list of all 10 modules - Practical 1 & 2 */}
        <nav className="flex-1 overflow-y-auto p-3" aria-label="Mobile Drawer Navigation">
          <ul className="space-y-1">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = item.id === currentPath;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                      isActive
                        ? 'bg-emerald-700 text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-xl ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-slate-500 text-center">
          Digital Dairy Management System • v2.4
        </div>
      </div>

      {/* Semantic Fixed Bottom Navigation Bar - Practical 2, 4 & 5 */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 pb-safe"
        aria-label="Mobile Bottom Navigation"
      >
        <ul className="flex items-center justify-around h-16 max-w-lg mx-auto">
          {/* Dashboard Tab */}
          <li>
            <a
              href="/"
              className={`flex flex-col items-center justify-center min-w-[56px] py-1 transition-colors ${
                currentPath === 'dashboard'
                  ? 'text-emerald-700 font-semibold'
                  : 'text-slate-500 hover:text-emerald-700'
              }`}
              aria-current={currentPath === 'dashboard' ? 'page' : undefined}
            >
              <span className="material-symbols-outlined text-2xl">dashboard</span>
              <span className="text-[11px] font-medium mt-0.5">Dashboard</span>
            </a>
          </li>

          {/* Farmers Tab */}
          <li>
            <a
              href="#farmers"
              className="flex flex-col items-center justify-center min-w-[56px] py-1 text-slate-500 hover:text-emerald-700 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">groups</span>
              <span className="text-[11px] font-medium mt-0.5">Farmers</span>
            </a>
          </li>

          {/* Center Prominent Quick Intake Action Button - Practical 5 (elevated/translated) */}
          <li className="-mt-6">
            <a
              href="#milk-collection"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-700 text-white shadow-lg shadow-emerald-700/40 active:scale-95 transition-transform"
              aria-label="Quick Milk Intake Entry"
            >
              <span className="material-symbols-outlined text-2xl">water_drop</span>
            </a>
          </li>

          {/* Milk Quality Tab */}
          <li>
            <a
              href="#milk-quality"
              className="flex flex-col items-center justify-center min-w-[56px] py-1 text-slate-500 hover:text-emerald-700 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">biotech</span>
              <span className="text-[11px] font-medium mt-0.5">Quality</span>
            </a>
          </li>

          {/* More Modules Toggle Button */}
          <li>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex flex-col items-center justify-center min-w-[56px] py-1 text-slate-500 hover:text-emerald-700 transition-colors focus:outline-none"
              aria-label="Open all modules menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
              <span className="text-[11px] font-medium mt-0.5">More</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
