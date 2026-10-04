'use client';

import React from 'react';
import { Farmer } from '@/lib/sampleData';

interface DeleteConfirmModalProps {
  farmer: Farmer | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * PRACTICAL 1: HTML Headings and Dialog Buttons
 * PRACTICAL 2: Semantic HTML5 Elements (<dialog> / <div>, <header>, <article>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning (fixed overlay, z-50)
 */
export default function DeleteConfirmModal({
  farmer,
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) {
  if (!isOpen || !farmer) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 p-6 space-y-4">
        {/* Warning Icon & Heading */}
        <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-2xl">warning</span>
        </div>

        <div className="text-center space-y-1.5">
          <h3 id="delete-dialog-title" className="text-lg font-bold text-slate-900">
            Delete Farmer Record?
          </h3>
          <p id="delete-dialog-description" className="text-xs text-slate-500 leading-relaxed">
            Are you sure you want to remove <strong className="text-slate-800">{farmer.name}</strong> (<span className="font-mono font-bold">#{farmer.id}</span>) from the cooperative registry?
          </p>
        </div>

        {/* Warning note */}
        <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 text-xs text-rose-800 text-left flex items-start gap-2">
          <span className="material-symbols-outlined text-base text-rose-600 mt-0.5">info</span>
          <span>
            This action will remove the producer from today's collection rota and shift rosters.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2.5 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-md shadow-rose-600/20 transition-all active:scale-95"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}
