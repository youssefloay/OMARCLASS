import React from 'react';
import { Video } from '../../types';
import VideoCard from '../VideoCard';

interface PurchasedVideosListProps {
  videos: Video[];
}

export default function PurchasedVideosList({ videos }: PurchasedVideosListProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Vous n'avez pas encore acheté de vidéos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}