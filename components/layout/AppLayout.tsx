'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import MobileNav from './MobileNav';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  currentPath?: string;
}

/**
 * PRACTICAL 1: HTML Headings, Lists and Images
 * PRACTICAL 2: Semantic HTML5 Elements (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox, CSS Grid and Responsive Breakpoints
 * PRACTICAL 5: CSS Positioning (fixed, sticky, relative, absolute, z-index)
 */
export default function AppLayout({
  children,
  pageTitle = 'Dashboard Overview',
  currentPath = 'dashboard',
}: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* 1. Desktop & Mobile Drawer Sidebar (<aside>) - Practical 2 & 5 */}
      <Sidebar
        currentPath={currentPath}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* 2. Main Shell Layout Container (with lg:pl-72 to offset fixed sidebar) - Practical 4 & 5 */}
      <div className="flex-1 flex flex-col lg:pl-72 transition-all duration-300">
        {/* Top Sticky Header (<header>) - Practical 2 & 5 */}
        <Header
          pageTitle={pageTitle}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        {/* Semantic Main Content (<main>) - Practical 2 */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 lg:pb-8">
          {children}
        </main>

        {/* Semantic Application Footer (<footer>) - Practical 2 */}
        <Footer />
      </div>

      {/* 3. Mobile Fixed Bottom Navigation Bar (<nav>) - Practical 2 & 5 */}
      <MobileNav
        currentPath={currentPath}
        onOpenSidebar={() => setSidebarOpen(true)}
      />
    </div>
  );
}
