'use client';

import React from 'react';
import { Farmer } from '@/lib/sampleData';

interface FarmerTableProps {
  farmers: Farmer[];
  onView: (farmer: Farmer) => void;
  onEdit: (farmer: Farmer) => void;
  onDelete: (farmer: Farmer) => void;
  onAddNew: () => void;
}

/**
 * PRACTICAL 1: HTML Headings, Tables, Lists and Images (Farmer profile avatars, Action buttons)
 * PRACTICAL 2: Semantic HTML5 Elements (<section>, <header>, <table>, <thead>, <tbody>, <tr>, <th>, <td>, <article>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Responsive Design: Table on Tablet/Desktop, Responsive Card View on Mobile (Avoids horizontal overflow)
 * PRACTICAL 5: CSS Positioning and Properties
 */
export default function FarmerTable({
  farmers,
  onView,
  onEdit,
  onDelete,
  onAddNew,
}: FarmerTableProps) {
  if (farmers.length === 0) {
    return (
      <section className="bg-white rounded-2xl p-10 border border-slate-200/90 shadow-xs text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-3xl">person_search</span>
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">No matching farmers found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
            Try adjusting your search criteria or filter options to locate the registered dairy producer.
          </p>
        </div>
        <button
          type="button"
          onClick={onAddNew}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
        >
          <span className="material-symbols-outlined text-base">person_add</span>
          <span>Register New Farmer</span>
        </button>
      </section>
    );
  }

  return (
    <section
      aria-label="Registered Farmers Directory"
      className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden"
    >
      {/* 1. Desktop & Tablet Table View (hidden on small mobile screens to prevent overflow) - Practical 1 & 4 */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-600 uppercase text-[11px] font-bold tracking-wider">
              <th scope="col" className="py-3.5 px-4">Farmer ID</th>
              <th scope="col" className="py-3.5 px-4">Farmer Name</th>
              <th scope="col" className="py-3.5 px-3">Phone</th>
              <th scope="col" className="py-3.5 px-3">Village</th>
              <th scope="col" className="py-3.5 px-3">Registration Date</th>
              <th scope="col" className="py-3.5 px-3 text-center">Status</th>
              <th scope="col" className="py-3.5 px-4 text-right">Total Milk</th>
              <th scope="col" className="py-3.5 px-3 text-center">Payment</th>
              <th scope="col" className="py-3.5 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {farmers.map((farmer) => (
              <tr
                key={farmer.id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                {/* Farmer ID */}
                <td className="py-3.5 px-4 font-mono font-bold text-emerald-800 whitespace-nowrap">
                  #{farmer.id}
                </td>

                {/* Farmer Name + Avatar */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    {farmer.avatarUrl ? (
                      <img
                        src={farmer.avatarUrl}
                        alt={`Photo of ${farmer.name}`}
                        className="w-9 h-9 rounded-full object-cover ring-1 ring-slate-200 flex-shrink-0"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                          const fallback = (e.target as HTMLElement).nextElementSibling;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        farmer.avatarUrl ? 'hidden' : ''
                      }`}
                    >
                      {farmer.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <span className="font-semibold text-slate-900 block truncate group-hover:text-emerald-700 transition-colors">
                        {farmer.name}
                      </span>
                      {farmer.cattleDetails && (
                        <span className="text-[11px] text-slate-400 block truncate">
                          {farmer.cattleDetails}
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* Phone */}
                <td className="py-3.5 px-3 font-mono text-slate-600 whitespace-nowrap">
                  {farmer.phone}
                </td>

                {/* Village */}
                <td className="py-3.5 px-3 text-slate-700 font-medium whitespace-nowrap">
                  {farmer.village}
                </td>

                {/* Registration Date */}
                <td className="py-3.5 px-3 text-slate-500 whitespace-nowrap text-xs font-mono">
                  {farmer.registrationDate}
                </td>

                {/* Status Badge */}
                <td className="py-3.5 px-3 text-center whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      farmer.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        farmer.status === 'Active' ? 'bg-emerald-600 animate-pulse' : 'bg-slate-400'
                      }`}
                    ></span>
                    {farmer.status}
                  </span>
                </td>

                {/* Total Milk Supplied */}
                <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900 tabular-nums whitespace-nowrap">
                  {farmer.totalMilkSupplied.toLocaleString('en-IN', { minimumFractionDigits: 1 })} L
                </td>

                {/* Payment Status Badge */}
                <td className="py-3.5 px-3 text-center whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      farmer.paymentStatus === 'Paid'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        farmer.paymentStatus === 'Paid' ? 'bg-emerald-600' : 'bg-rose-600'
                      }`}
                    ></span>
                    {farmer.paymentStatus}
                  </span>
                </td>

                {/* Actions: View, Edit, Delete (Practical 1 & 4) */}
                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1.5">
                    {/* View Button */}
                    <button
                      type="button"
                      onClick={() => onView(farmer)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                      title="View Details"
                      aria-label={`View details for ${farmer.name}`}
                    >
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>

                    {/* Edit Button */}
                    <button
                      type="button"
                      onClick={() => onEdit(farmer)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-colors"
                      title="Edit Farmer"
                      aria-label={`Edit ${farmer.name}`}
                    >
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>

                    {/* Delete Button */}
                    <button
                      type="button"
                      onClick={() => onDelete(farmer)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
                      title="Delete Farmer"
                      aria-label={`Delete ${farmer.name}`}
                    >
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. Mobile Responsive Card View (Shown on Mobile screens < 768px to prevent horizontal overflow) - Practical 4 */}
      <div className="md:hidden divide-y divide-slate-100">
        {farmers.map((farmer) => (
          <article key={farmer.id} className="p-4 space-y-3">
            {/* Header: Farmer Info & Status */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                {farmer.avatarUrl ? (
                  <img
                    src={farmer.avatarUrl}
                    alt={`Photo of ${farmer.name}`}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-200 flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = (e.target as HTMLElement).nextElementSibling;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div
                  className={`w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    farmer.avatarUrl ? 'hidden' : ''
                  }`}
                >
                  {farmer.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono text-xs font-bold text-emerald-800">
                      #{farmer.id}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {farmer.name}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-500 font-mono block">
                    {farmer.phone}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  farmer.status === 'Active'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    farmer.status === 'Active' ? 'bg-emerald-600' : 'bg-slate-400'
                  }`}
                ></span>
                {farmer.status}
              </span>
            </div>

            {/* Quick Details Matrix */}
            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Village</span>
                <span className="font-semibold text-slate-800 truncate block">{farmer.village}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Registration</span>
                <span className="font-mono text-slate-700 block">{farmer.registrationDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Milk</span>
                <span className="font-mono font-bold text-slate-900 block">
                  {farmer.totalMilkSupplied.toLocaleString('en-IN')} L
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Payment</span>
                <span
                  className={`inline-block font-bold text-[11px] ${
                    farmer.paymentStatus === 'Paid' ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  {farmer.paymentStatus}
                  {farmer.pendingAmount && farmer.pendingAmount > 0
                    ? ` (₹${farmer.pendingAmount.toLocaleString()})`
                    : ''}
                </span>
              </div>
            </div>

            {/* Mobile Actions Button Group */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => onView(farmer)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>View</span>
              </button>

              <button
                type="button"
                onClick={() => onEdit(farmer)}
                className="flex-1 py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-base">edit</span>
                <span>Edit</span>
              </button>

              <button
                type="button"
                onClick={() => onDelete(farmer)}
                className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center justify-center transition-colors"
                title="Delete"
              >
                <span className="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
