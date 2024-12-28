import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import AccountInfo from '../components/account/AccountInfo';
import PurchasedVideosList from '../components/account/PurchasedVideosList';

// Mock data - replace with API call
const mockPurchasedVideos = [
  {
    id: '1',
    title: 'Les fonctions du second degré',
    description: 'Cours complet sur les fonctions polynômes du second degré.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    category: 'premiere' as const,
    price: 14.99,
    duration: 3600,
    createdAt: new Date().toISOString(),
  },
];

export default function Account() {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon compte</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AccountInfo user={user} />
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Mes cours achetés
          </h2>
          <PurchasedVideosList videos={mockPurchasedVideos} />
        </div>
      </div>
    </div>
  );
}