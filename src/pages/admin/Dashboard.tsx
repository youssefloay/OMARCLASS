import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import DashboardStats from '../../components/admin/DashboardStats';

export default function AdminDashboard() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Tableau de bord
      </h1>
      
      <DashboardStats />
      
      {/* Additional admin dashboard sections can be added here */}
    </div>
  );
}