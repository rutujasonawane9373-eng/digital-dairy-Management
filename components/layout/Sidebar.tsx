'use client';

import React from 'react';
import { NAVIGATION_ITEMS, COOPERATIVE_INFO } from '@/lib/sampleData';

interface SidebarProps {
  currentPath?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

/**
 * PRACTICAL 1: HTML Headings, Lists and Images
 * PRACTICAL 2: Semantic HTML5 Elements (<aside>, <nav>, <ul>, <li>, <header>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Responsive Design
 * PRACTICAL 5: CSS Positioning (fixed, sticky, relative, absolute, z-index)
 */
export default function Sidebar({ currentPath = 'dashboard', isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop Overlay - Practical 5 (fixed positioning, z-index) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Semantic <aside> element for Sidebar - Practical 2 */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-xl lg:shadow-none`}
        aria-label="Primary Navigation Sidebar"
      >
        {/* Top Header inside Sidebar: Branding & Logo - Practical 1 & 2 */}
        <div className="flex flex-col">
          <div className="h-16 px-5 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-3 min-w-0">
              {/* Dairy Logo Visual - Practical 1 (Image/Visual with meaningful alt) */}
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">water_drop</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base font-bold text-slate-900 tracking-tight leading-tight truncate">
                  Digital Dairy
                </span>
                <span className="text-xs font-medium text-emerald-700 truncate flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Management System
                </span>
              </div>
            </div>

            {/* Close button for mobile view - Practical 5 */}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close navigation sidebar"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            )}
          </div>

          {/* Sub-header banner showing branch / chilling center */}
          <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="material-symbols-outlined text-sm text-slate-400">domain</span>
              <span className="font-medium truncate">{COOPERATIVE_INFO.branch}</span>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
              Live Shift
            </span>
          </div>

          {/* Semantic Navigation Section with unordered list - Practical 1 & 2 */}
          <nav className="p-3 overflow-y-auto max-h-[calc(100vh-210px)]" aria-label="Main Application Menu">
            <div className="px-3 pb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Main Operations
            </div>
            <ul className="space-y-1">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = item.id === currentPath;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => onClose && onClose()}
                      className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                        isActive
                          ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-700/25 font-semibold'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`material-symbols-outlined text-xl transition-transform group-hover:scale-105 ${
                            isActive ? 'text-white' : 'text-slate-500 group-hover:text-emerald-700'
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="truncate">{item.label}</span>
                      </div>

                      {/* Pill Badge indicator - Practical 3 & 4 */}
                      {item.badge && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full tracking-wide ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : item.badge === 'LIVE'
                              ? 'bg-emerald-100 text-emerald-800 animate-pulse'
                              : item.badge === 'Due'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-slate-100 text-slate-600'
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
        </div>

        {/* Sidebar Footer: Hardware Telemetry & System Status - Practical 1 & 2 */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/60">
          <div className="rounded-xl p-3 bg-white border border-slate-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-700">sensors</span>
                Telemetry Status
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </div>
            <ul className="text-[11px] text-slate-500 space-y-1">
              <li className="flex items-center justify-between">
                <span>Weigh Scale:</span>
                <span className="font-semibold text-emerald-700">Online</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Fat Analyzer:</span>
                <span className="font-semibold text-emerald-700">Calibrated</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
