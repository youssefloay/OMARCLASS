import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import ReportsChart from '../../components/admin/ReportsChart';

// Mock data - replace with API call
const salesData = [
  { label: 'Janvier', value: 1200 },
  { label: 'Février', value: 1800 },
  { label: 'Mars', value: 1400 },
  { label: 'Avril', value: 2200 },
];

const viewsData = [
  { label: 'Mathématiques', value: 450 },
  { label: 'Physique', value: 380 },
  { label: 'Chimie', value: 290 },
  { label: 'SVT', value: 320 },
];

export default function AdminReports() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Rapports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReportsChart data={salesData} title="Ventes mensuelles" />
        <ReportsChart data={viewsData} title="Vues par matière" />
      </div>
    </div>
  );
}