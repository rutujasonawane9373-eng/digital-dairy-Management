'use client';

import React, { useState, useEffect } from 'react';
import { COOPERATIVE_INFO } from '@/lib/sampleData';

interface HeaderProps {
  onToggleSidebar?: () => void;
  pageTitle?: string;
}

/**
 * PRACTICAL 1: HTML Headings, Lists and Images (User Profile photo, headers)
 * PRACTICAL 2: Semantic HTML5 Elements (<header>, <nav>, <figure>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Responsive Design
 * PRACTICAL 5: CSS Positioning (sticky top-0, relative/absolute for notification badges)
 */
export default function Header({ onToggleSidebar, pageTitle = 'Dashboard Overview' }: HeaderProps) {
  // Live ticking clock for morning shift telemetry
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Page Title Hierarchy (Practical 1 & 4) */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700"
            aria-label="Open navigation sidebar"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-tight truncate">
                {pageTitle}
              </h1>

              {/* Live Shift Badge - Practical 3 & 4 */}
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Morning Shift • LIVE
              </span>
            </div>

            <p className="hidden md:block text-xs text-slate-500 truncate">
              {COOPERATIVE_INFO.branch} • {COOPERATIVE_INFO.location}
            </p>
          </div>
        </div>

        {/* Center / Right: Live Clock, Notifications & User Profile (Practical 4 & 5) */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          {/* Live Shift Clock Telemetry */}
          {currentTime && (
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 rounded-xl text-xs font-mono font-medium text-slate-700 border border-slate-200/60">
              <span className="material-symbols-outlined text-emerald-700 text-base">schedule</span>
              <span>{currentTime}</span>
            </div>
          )}

          {/* Quick Hardware Status Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-xl text-xs font-medium text-emerald-800 border border-emerald-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="hidden lg:inline">Scale & Analyzer:</span>
            <span className="font-semibold">Online</span>
          </div>

          {/* Notification Bell Button with Absolute Counter Badge - Practical 5 (relative/absolute) */}
          <div className="relative">
            <button
              type="button"
              className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="View notifications (3 unread notifications)"
            >
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-sky-600 rounded-full border-2 border-white shadow-xs">
                3
              </span>
            </button>
          </div>

          {/* User Profile Area with Semantic Visual Image - Practical 1 & 2 */}
          <div className="flex items-center gap-3 pl-2 sm:pl-3 border-l border-slate-200">
            <div className="relative flex-shrink-0">
              {/* Profile Image with alt attribute - Practical 1 */}
              <img
                src={COOPERATIVE_INFO.manager.avatar}
                alt={`${COOPERATIVE_INFO.manager.name} Profile`}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-emerald-600/30"
                onError={(e) => {
                  // Fallback if network blocks remote URL
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = (e.target as HTMLElement).nextElementSibling;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              {/* Fallback avatar icon */}
              <div className="hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                RS
              </div>
              {/* Active Online Status Dot - Practical 5 (absolute positioning) */}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"
                title="Active Now"
              ></span>
            </div>

            <div className="hidden md:flex flex-col text-left">
              <span className="text-sm font-semibold text-slate-900 leading-tight">
                {COOPERATIVE_INFO.manager.name}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {COOPERATIVE_INFO.manager.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
