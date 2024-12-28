import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import UsersTable from '../../components/admin/UsersTable';

// Mock data - replace with API call
const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'user', purchasedVideos: [] },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'admin', purchasedVideos: [] },
];

export default function AdminUsers() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const handleDeleteUser = (id: string) => {
    // Implement user deletion logic
    console.log('Delete user:', id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Gestion des utilisateurs</h1>
      <UsersTable users={mockUsers} onDelete={handleDeleteUser} />
    </div>
  );
}