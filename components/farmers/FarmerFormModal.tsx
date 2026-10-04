'use client';

import React, { useState, useEffect } from 'react';
import { Farmer } from '@/lib/sampleData';

interface FarmerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (farmer: Farmer) => void;
  initialData?: Farmer | null;
  existingIds: string[];
}

/**
 * PRACTICAL 1: HTML Forms, Inputs, Labels and Validation Messages
 * PRACTICAL 2: Semantic HTML5 Elements (<dialog> / <div>, <header>, <form>, <fieldset>, <label>)
 * PRACTICAL 3: CSS Styling with Tailwind CSS
 * PRACTICAL 4: Flexbox and Grid Layout
 * PRACTICAL 5: CSS Positioning (fixed modal overlay, z-50, backdrop blur)
 */
export default function FarmerFormModal({
  isOpen,
  onClose,
  onSave,
  initialData,
  existingIds,
}: FarmerFormModalProps) {
  const isEdit = Boolean(initialData);

  // Form State
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    address: '',
    village: '',
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Active' as 'Active' | 'Inactive',
    totalMilkSupplied: 0,
    paymentStatus: 'Paid' as 'Paid' | 'Pending',
    pendingAmount: 0,
    cattleDetails: '',
  });

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id,
        name: initialData.name,
        phone: initialData.phone,
        address: initialData.address,
        village: initialData.village,
        registrationDate: initialData.registrationDate,
        status: initialData.status,
        totalMilkSupplied: initialData.totalMilkSupplied || 0,
        paymentStatus: initialData.paymentStatus,
        pendingAmount: initialData.pendingAmount || 0,
        cattleDetails: initialData.cattleDetails || '',
      });
      setErrors({});
    } else {
      // Auto-generate next sequential Farmer ID (e.g. F-483)
      const nextId = `F-${Math.floor(100 + Math.random() * 900)}`;
      setFormData({
        id: nextId,
        name: '',
        phone: '',
        address: '',
        village: '',
        registrationDate: new Date().toISOString().split('T')[0],
        status: 'Active',
        totalMilkSupplied: 0,
        paymentStatus: 'Paid',
        pendingAmount: 0,
        cattleDetails: '',
      });
      setErrors({});
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  // Basic Validation Logic (Practical 1 & 2)
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Full Name must be at least 3 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Phone number is required.';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.village.trim()) {
      newErrors.village = 'Village name or cluster is required.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Residential / Farm address is required.';
    }

    if (!formData.id.trim()) {
      newErrors.id = 'Farmer ID is required.';
    } else if (!isEdit && existingIds.includes(formData.id.trim())) {
      newErrors.id = 'This Farmer ID already exists.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const savedFarmer: Farmer = {
      id: formData.id.trim(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      village: formData.village.trim(),
      registrationDate: formData.registrationDate,
      status: formData.status,
      totalMilkSupplied: formData.totalMilkSupplied,
      paymentStatus: formData.paymentStatus,
      pendingAmount: formData.pendingAmount,
      cattleDetails: formData.cattleDetails.trim() || undefined,
      avatarUrl: initialData?.avatarUrl,
      bankDetails: initialData?.bankDetails,
    };

    onSave(savedFarmer);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">
                {isEdit ? 'edit_note' : 'person_add'}
              </span>
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-slate-900">
                {isEdit ? 'Edit Farmer Profile' : 'Register New Farmer'}
              </h3>
              <p className="text-xs text-slate-500">
                {isEdit
                  ? `Update information for #${formData.id}`
                  : 'Add a new milk producer to the cooperative directory'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Farmer ID */}
            <div>
              <label htmlFor="f-id" className="block text-xs font-semibold text-slate-700 mb-1">
                Farmer ID <span className="text-rose-500">*</span>
              </label>
              <input
                id="f-id"
                type="text"
                disabled={isEdit}
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                placeholder="e.g. F-104"
                className={`w-full h-10 px-3 rounded-xl bg-slate-50 border text-sm font-mono focus:outline-none transition-colors ${
                  errors.id
                    ? 'border-rose-400 focus:border-rose-500'
                    : 'border-slate-200 focus:border-emerald-700'
                } ${isEdit ? 'opacity-70 cursor-not-allowed' : ''}`}
              />
              {errors.id && <p className="text-xs text-rose-600 mt-1">{errors.id}</p>}
            </div>

            {/* Registration Date */}
            <div>
              <label htmlFor="f-date" className="block text-xs font-semibold text-slate-700 mb-1">
                Registration Date <span className="text-rose-500">*</span>
              </label>
              <input
                id="f-date"
                type="date"
                value={formData.registrationDate}
                onChange={(e) => setFormData({ ...formData, registrationDate: e.target.value })}
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-mono focus:outline-none focus:border-emerald-700 transition-colors cursor-pointer"
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="f-name" className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="f-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ramesh Patel"
              className={`w-full h-10 px-3 rounded-xl bg-slate-50 border text-sm focus:outline-none transition-colors ${
                errors.name
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-slate-200 focus:border-emerald-700'
              }`}
            />
            {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label htmlFor="f-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="f-phone"
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98251 44102"
                className={`w-full h-10 px-3 rounded-xl bg-slate-50 border text-sm font-mono focus:outline-none transition-colors ${
                  errors.phone
                    ? 'border-rose-400 focus:border-rose-500'
                    : 'border-slate-200 focus:border-emerald-700'
                }`}
              />
              {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
            </div>

            {/* Village */}
            <div>
              <label htmlFor="f-village" className="block text-xs font-semibold text-slate-700 mb-1">
                Village / Cluster <span className="text-rose-500">*</span>
              </label>
              <input
                id="f-village"
                type="text"
                value={formData.village}
                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                placeholder="e.g. Anandpur North"
                className={`w-full h-10 px-3 rounded-xl bg-slate-50 border text-sm focus:outline-none transition-colors ${
                  errors.village
                    ? 'border-rose-400 focus:border-rose-500'
                    : 'border-slate-200 focus:border-emerald-700'
                }`}
              />
              {errors.village && <p className="text-xs text-rose-600 mt-1">{errors.village}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="f-address" className="block text-xs font-semibold text-slate-700 mb-1">
              Residential / Farm Address <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="f-address"
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="e.g. Plot 14, Near Gaushala, Anandpur North"
              className={`w-full p-3 rounded-xl bg-slate-50 border text-sm focus:outline-none transition-colors ${
                errors.address
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-slate-200 focus:border-emerald-700'
              }`}
            />
            {errors.address && <p className="text-xs text-rose-600 mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Status */}
            <div>
              <label htmlFor="f-status" className="block text-xs font-semibold text-slate-700 mb-1">
                Status
              </label>
              <select
                id="f-status"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as 'Active' | 'Inactive' })
                }
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:border-emerald-700 cursor-pointer"
              >
                <option value="Active">Active (Delivering)</option>
                <option value="Inactive">Inactive (Dry Period / On Leave)</option>
              </select>
            </div>

            {/* Cattle Details */}
            <div>
              <label htmlFor="f-cattle" className="block text-xs font-semibold text-slate-700 mb-1">
                Livestock / Cattle Count
              </label>
              <input
                id="f-cattle"
                type="text"
                value={formData.cattleDetails}
                onChange={(e) => setFormData({ ...formData, cattleDetails: e.target.value })}
                placeholder="e.g. 6 Buffaloes, 2 Cows"
                className="w-full h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-700"
              />
            </div>
          </div>

          {/* Form Actions Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-md shadow-emerald-700/20 transition-all active:scale-95"
            >
              {isEdit ? 'Save Changes' : 'Register Farmer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
