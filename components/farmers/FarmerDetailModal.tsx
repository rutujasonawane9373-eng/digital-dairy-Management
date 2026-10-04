'use client';

import React from 'react';
import { Farmer } from '@/lib/sampleData';

interface FarmerDetailModalProps {
  farmer: Farmer | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (farmer: Farmer) => void;
}

/**
 * PRACTICAL 1: HTML Headings, Lists and Images (Full profile display)
 * PRACTICAL 2: Semantic HTML5 Elements (<dialog> / <div>, <header>, <section>, <article>, <figure>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning (fixed overlay, z-50)
 */
export default function FarmerDetailModal({
  farmer,
  isOpen,
  onClose,
  onEdit,
}: FarmerDetailModalProps) {
  if (!isOpen || !farmer) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="farmer-detail-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header with Farmer Cover Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 p-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <div className="flex items-center gap-4">
            {farmer.avatarUrl ? (
              <img
                src={farmer.avatarUrl}
                alt={farmer.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-white/30 shadow-lg flex-shrink-0"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-2xl ring-4 ring-white/30 flex-shrink-0">
                {farmer.name.charAt(0)}
              </div>
            )}

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-mono font-bold tracking-wide">
                  #{farmer.id}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    farmer.status === 'Active'
                      ? 'bg-emerald-200 text-emerald-950'
                      : 'bg-slate-200 text-slate-800'
                  }`}
                >
                  {farmer.status}
                </span>
              </div>
              <h3 id="farmer-detail-title" className="text-xl font-extrabold tracking-tight mt-1 truncate">
                {farmer.name}
              </h3>
              <p className="text-emerald-100 text-xs flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>{farmer.village}</span>
                <span>•</span>
                <span>Enrolled on {farmer.registrationDate}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body: Stats & Details Grid */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Total Milk Supplied
              </span>
              <span className="text-lg font-mono font-extrabold text-slate-900 block mt-0.5">
                {farmer.totalMilkSupplied.toLocaleString('en-IN', { minimumFractionDigits: 1 })} L
              </span>
              <span className="text-[11px] text-emerald-600 font-medium">Lifetime volume</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Payment Status
              </span>
              <span
                className={`text-lg font-extrabold block mt-0.5 ${
                  farmer.paymentStatus === 'Paid' ? 'text-emerald-700' : 'text-rose-700'
                }`}
              >
                {farmer.paymentStatus}
              </span>
              <span className="text-[11px] text-slate-500">
                {farmer.pendingAmount && farmer.pendingAmount > 0
                  ? `₹${farmer.pendingAmount.toLocaleString()} Pending`
                  : 'All dues settled'}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Livestock Herd
              </span>
              <span className="text-sm font-semibold text-slate-900 block mt-1 line-clamp-1">
                {farmer.cattleDetails || 'Mixed Dairy Cattle'}
              </span>
              <span className="text-[11px] text-slate-500">RFID Tagged</span>
            </div>
          </div>

          {/* Contact & Residential Details */}
          <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-700">contacts</span>
              Contact & Location Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Phone Number</span>
                <span className="font-mono text-slate-900 font-semibold text-sm">
                  {farmer.phone}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Village / Cluster</span>
                <span className="text-slate-900 font-semibold">{farmer.village}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block font-medium">Full Address</span>
                <span className="text-slate-700">{farmer.address}</span>
              </div>
            </div>
          </div>

          {/* Bank & Settlement Details */}
          <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200/80 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-emerald-700">account_balance</span>
              Automated Bank Settlement Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-emerald-700/80 block font-medium">Bank Name</span>
                <span className="font-semibold text-slate-900">
                  {farmer.bankDetails?.bankName || 'State Bank of India'}
                </span>
              </div>
              <div>
                <span className="text-emerald-700/80 block font-medium">Account Number</span>
                <span className="font-mono font-semibold text-slate-900">
                  •••• {farmer.bankDetails?.accountLastFour || '4821'}
                </span>
              </div>
              <div>
                <span className="text-emerald-700/80 block font-medium">IFSC Code</span>
                <span className="font-mono font-semibold text-slate-900">
                  {farmer.bankDetails?.ifsc || 'SBIN0001004'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Cooperative Member Record Verified
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onEdit(farmer);
              }}
              className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
