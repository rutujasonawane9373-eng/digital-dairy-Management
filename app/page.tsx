import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import KpiCards from '@/components/dashboard/KpiCards';
import MilkCollectionOverview from '@/components/dashboard/MilkCollectionOverview';
import RevenueOverview from '@/components/dashboard/RevenueOverview';
import RecentCollections from '@/components/dashboard/RecentCollections';
import RecentPayments from '@/components/dashboard/RecentPayments';
import DairyShowcaseCard from '@/components/dashboard/DairyShowcaseCard';

/**
 * COLLEGE PROJECT: DIGITAL DAIRY MANAGEMENT SYSTEM
 * Foundation & Dashboard Implementation
 *
 * PRACTICAL ALIGNMENT REFERENCE:
 * - Practical 1: HTML headings, lists and images (<figure>, <img>, <h1>-<h4>, <ul>, <ol>)
 * - Practical 2: Semantic HTML5 elements (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>)
 * - Practical 3: CSS styling (Tailwind CSS utility tokens, custom palette, typography)
 * - Practical 4: Flexbox, CSS Grid and responsive design (sm, md, lg, xl, 2xl breakpoints)
 * - Practical 5: CSS positioning (fixed, sticky, relative, absolute, z-index hierarchy)
 */
export default function DashboardPage() {
  return (
    <AppLayout pageTitle="Dashboard Overview" currentPath="dashboard">
      <div className="space-y-6 sm:space-y-8">
        {/* 1. Welcome & Shift Status Banner Section */}
        <WelcomeBanner />

        {/* 2. Key Operational KPI Cards (6 Telemetry Cards) */}
        <KpiCards />

        {/* 3. Operational Analytics Grid (Milk Quality + Revenue Overview) - Practical 4: CSS Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <MilkCollectionOverview />
          <RevenueOverview />
        </div>

        {/* 4. Recent Milk Collections Live Stream (Ledger Table) */}
        <RecentCollections />

        {/* 5. Direct Bank Disbursals & Settlement Feed */}
        <RecentPayments />

        {/* 6. Facility Transparency & SOP Protocol Showcase (Images & Ordered Lists) */}
        <DairyShowcaseCard />
      </div>
    </AppLayout>
  );
}
