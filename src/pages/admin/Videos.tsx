import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Plus, Pencil, Trash } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import VideoForm from '../../components/admin/VideoForm';
import { Video } from '../../types';

// Mock data - replace with API call
const mockVideos = [
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

export default function AdminVideos() {
  const { user, isAuthenticated } = useAuthStore();
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (videoData: Partial<Video>) => {
    // Implement video creation/update logic
    console.log('Video data:', videoData);
    setShowForm(false);
    setEditingVideo(null);
  };

  const handleDelete = (id: string) => {
    // Implement video deletion logic
    console.log('Delete video:', id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gestion des vidéos</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
          Ajouter une vidéo
        </button>
      </div>

      {(showForm || editingVideo) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingVideo ? 'Modifier la vidéo' : 'Ajouter une vidéo'}
            </h2>
            <VideoForm
              video={editingVideo || undefined}
              onSubmit={handleSubmit}
            />
            <button
              onClick={() => {
                setShowForm(false);
                setEditingVideo(null);
              }}
              className="mt-4 text-gray-600 hover:text-gray-800"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {mockVideos.map(video => (
            <li key={video.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEditingVideo(video)}
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="p-2 text-red-400 hover:text-red-500"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}