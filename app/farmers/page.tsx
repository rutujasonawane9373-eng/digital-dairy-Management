'use client';

import React, { useState, useMemo } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { INITIAL_FARMERS, Farmer } from '@/lib/sampleData';
import FarmerSummaryCards from '@/components/farmers/FarmerSummaryCards';
import FarmerFilters from '@/components/farmers/FarmerFilters';
import FarmerTable from '@/components/farmers/FarmerTable';
import FarmerFormModal from '@/components/farmers/FarmerFormModal';
import FarmerDetailModal from '@/components/farmers/FarmerDetailModal';
import DeleteConfirmModal from '@/components/farmers/DeleteConfirmModal';

/**
 * COLLEGE PROJECT: DIGITAL DAIRY MANAGEMENT SYSTEM
 * Module: Farmers Management
 *
 * PRACTICAL ALIGNMENT REFERENCE:
 * - Practical 1: HTML headings, lists, forms, validation, tables and images
 * - Practical 2: Semantic HTML5 elements (<header>, <nav>, <main>, <section>, <article>, <table>)
 * - Practical 3: CSS styling (Tailwind CSS utility tokens, custom palette, typography)
 * - Practical 4: Flexbox, CSS Grid and responsive design (Desktop, Tablet, Mobile)
 * - Practical 5: CSS positioning (fixed modals, sticky headers, absolute overlays)
 */
export default function FarmersPage() {
  // 1. Local State for Farmers (Pure Frontend State Management)
  const [farmers, setFarmers] = useState<Farmer[]>(INITIAL_FARMERS);

  // 2. Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Active' | 'Inactive'>('All');
  const [paymentFilter, setPaymentFilter] = useState<'All' | 'Paid' | 'Pending'>('All');

  // 3. Modals State
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingFarmer, setEditingFarmer] = useState<Farmer | null>(null);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [farmerToDelete, setFarmerToDelete] = useState<Farmer | null>(null);

  // 4. Toast Notification Feedback State
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // 5. Multi-Attribute Filter Logic (Search by name, ID, phone, village)
  const filteredFarmers = useMemo(() => {
    return farmers.filter((farmer) => {
      // Search matching: name, ID, phone, village
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        farmer.name.toLowerCase().includes(query) ||
        farmer.id.toLowerCase().includes(query) ||
        farmer.phone.toLowerCase().includes(query) ||
        farmer.village.toLowerCase().includes(query);

      // Status filter
      const matchesStatus = statusFilter === 'All' || farmer.status === statusFilter;

      // Payment filter
      const matchesPayment = paymentFilter === 'All' || farmer.paymentStatus === paymentFilter;

      return matchesSearch && matchesStatus && matchesPayment;
    });
  }, [farmers, searchQuery, statusFilter, paymentFilter]);

  // Handlers
  const handleAddNewFarmer = () => {
    setEditingFarmer(null);
    setIsFormModalOpen(true);
  };

  const handleEditFarmer = (farmer: Farmer) => {
    setEditingFarmer(farmer);
    setIsFormModalOpen(true);
  };

  const handleViewFarmer = (farmer: Farmer) => {
    setSelectedFarmer(farmer);
    setIsDetailModalOpen(true);
  };

  const handleDeletePrompt = (farmer: Farmer) => {
    setFarmerToDelete(farmer);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!farmerToDelete) return;
    const removedId = farmerToDelete.id;
    const removedName = farmerToDelete.name;

    setFarmers((prev) => prev.filter((f) => f.id !== removedId));
    setIsDeleteModalOpen(false);
    setFarmerToDelete(null);
    showToast(`Farmer ${removedName} (#${removedId}) deleted successfully.`, 'error');
  };

  const handleSaveFarmer = (savedFarmer: Farmer) => {
    if (editingFarmer) {
      // Update existing farmer in state
      setFarmers((prev) =>
        prev.map((f) => (f.id === savedFarmer.id ? savedFarmer : f))
      );
      showToast(`Farmer ${savedFarmer.name} updated successfully.`, 'success');
    } else {
      // Add new farmer to state
      setFarmers((prev) => [savedFarmer, ...prev]);
      showToast(`New farmer ${savedFarmer.name} registered successfully.`, 'success');
    }
    setIsFormModalOpen(false);
    setEditingFarmer(null);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('All');
    setPaymentFilter('All');
  };

  return (
    <AppLayout pageTitle="Farmers Management" currentPath="farmers">
      {/* Toast Notification Alert (Practical 5: fixed positioning, z-50) */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-20 right-4 sm:right-8 z-50 px-4 py-3 rounded-2xl shadow-xl border flex items-center gap-2.5 text-xs sm:text-sm font-semibold transition-all animate-in slide-in-from-top-4 duration-200 ${
            toastMessage.type === 'success'
              ? 'bg-emerald-900 text-white border-emerald-700'
              : toastMessage.type === 'error'
              ? 'bg-rose-900 text-white border-rose-700'
              : 'bg-slate-900 text-white border-slate-700'
          }`}
        >
          <span className="material-symbols-outlined text-lg">
            {toastMessage.type === 'success' ? 'check_circle' : 'info'}
          </span>
          <span>{toastMessage.text}</span>
        </div>
      )}

      <div className="space-y-6 sm:space-y-8">
        {/* 1. Page Header Section (Practical 1 & 2) */}
        <section
          aria-label="Farmers Management Header"
          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Producer Registry
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {farmers.length} Enrolled Farmers
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Farmers Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Manage cooperative milk producers, delivery quotas, KYC documents, cattle telemetry, and direct bank settlement status.
            </p>
          </div>

          {/* Add Farmer CTA Button - Practical 1 */}
          <button
            type="button"
            onClick={handleAddNewFarmer}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md shadow-emerald-700/25 transition-all active:scale-95 flex-shrink-0 self-start sm:self-auto"
          >
            <span className="material-symbols-outlined text-xl">person_add</span>
            <span>+ Add Farmer</span>
          </button>
        </section>

        {/* 2. Summary Cards Section (4 KPI Cards: Total, Active, Inactive, Pending Payments) */}
        <FarmerSummaryCards farmers={farmers} />

        {/* 3. Search & Filter Bar */}
        <FarmerFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          paymentFilter={paymentFilter}
          onPaymentFilterChange={setPaymentFilter}
          totalResults={filteredFarmers.length}
          totalFarmers={farmers.length}
          onReset={handleResetFilters}
        />

        {/* 4. Farmers Table & Responsive Card View */}
        <FarmerTable
          farmers={filteredFarmers}
          onView={handleViewFarmer}
          onEdit={handleEditFarmer}
          onDelete={handleDeletePrompt}
          onAddNew={handleAddNewFarmer}
        />
      </div>

      {/* 5. Modals for Add/Edit, View and Delete - Practical 5 (fixed positioning, z-50) */}
      <FarmerFormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onSave={handleSaveFarmer}
        initialData={editingFarmer}
        existingIds={farmers.map((f) => f.id)}
      />

      <FarmerDetailModal
        farmer={selectedFarmer}
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedFarmer(null);
        }}
        onEdit={(farmer) => {
          setIsDetailModalOpen(false);
          handleEditFarmer(farmer);
        }}
      />

      <DeleteConfirmModal
        farmer={farmerToDelete}
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setFarmerToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </AppLayout>
  );
}
