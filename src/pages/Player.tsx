import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import VideoPlayer from '../components/player/VideoPlayer';
import VideoNotes from '../components/player/VideoNotes';

// Mock data - replace with API call
const mockVideo = {
  id: '1',
  title: 'Les fonctions du second degré',
  videoUrl: 'https://example.com/video.mp4',
};

export default function Player() {
  const { id } = useParams();
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Check if user has purchased this video
  const hasPurchased = user.purchasedVideos.includes(id || '');
  if (!hasPurchased) {
    return <Navigate to={`/video/${id}`} replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoPlayer
            videoUrl={mockVideo.videoUrl}
            title={mockVideo.title}
          />
          <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
            {mockVideo.title}
          </h1>
        </div>
        
        <div className="lg:col-span-1">
          <VideoNotes />
        </div>
      </div>
    </div>
  );
}