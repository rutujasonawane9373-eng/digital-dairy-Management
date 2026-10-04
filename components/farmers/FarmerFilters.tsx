'use client';

import React from 'react';

interface FarmerFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: 'All' | 'Active' | 'Inactive';
  onStatusFilterChange: (value: 'All' | 'Active' | 'Inactive') => void;
  paymentFilter: 'All' | 'Paid' | 'Pending';
  onPaymentFilterChange: (value: 'All' | 'Paid' | 'Pending') => void;
  totalResults: number;
  totalFarmers: number;
  onReset: () => void;
}

/**
 * PRACTICAL 1: HTML Inputs, Select Dropdowns and Labels
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <form>, <label>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning (relative/absolute icons)
 */
export default function FarmerFilters({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  paymentFilter,
  onPaymentFilterChange,
  totalResults,
  totalFarmers,
  onReset,
}: FarmerFiltersProps) {
  const isFiltered = searchQuery.trim() !== '' || statusFilter !== 'All' || paymentFilter !== 'All';

  return (
    <section
      aria-label="Search and Filter Farmers"
      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-4"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
        {/* Real-time Multi-attribute Search Bar (Practical 1 & 5) */}
        <div className="relative flex-1 min-w-0">
          <label htmlFor="farmer-search" className="sr-only">
            Search farmers by name, ID, phone, or village
          </label>
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
            search
          </span>
          <input
            id="farmer-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, ID (e.g. F-104), phone, or village..."
            className="w-full h-11 pl-11 pr-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          )}
        </div>

        {/* Dropdown Filters (Status + Payment) - Practical 1 & 4 */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
          {/* Status Filter */}
          <div className="flex-1 sm:flex-initial flex items-center gap-1.5">
            <label htmlFor="status-filter" className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Status:
            </label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => onStatusFilterChange(e.target.value as 'All' | 'Active' | 'Inactive')}
              className="h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active Only</option>
              <option value="Inactive">Inactive Only</option>
            </select>
          </div>

          {/* Payment Filter */}
          <div className="flex-1 sm:flex-initial flex items-center gap-1.5">
            <label htmlFor="payment-filter" className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Payment:
            </label>
            <select
              id="payment-filter"
              value={paymentFilter}
              onChange={(e) => onPaymentFilterChange(e.target.value as 'All' | 'Paid' | 'Pending')}
              className="h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 cursor-pointer"
            >
              <option value="All">All Payments</option>
              <option value="Paid">Paid Only</option>
              <option value="Pending">Pending Only</option>
            </select>
          </div>

          {/* Reset Filters Button */}
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="h-11 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1"
              title="Reset all filters"
            >
              <span className="material-symbols-outlined text-base">restart_alt</span>
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Results status indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="material-symbols-outlined text-sm text-emerald-700">filter_list</span>
          Showing <strong className="text-slate-900 font-bold">{totalResults}</strong> of {totalFarmers} registered farmers
        </span>
        {isFiltered && (
          <span className="text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
            Filtered View
          </span>
        )}
      </div>
    </section>
  );
}
