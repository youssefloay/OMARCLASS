import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Euro } from 'lucide-react';
import { Video } from '../types';
import { formatDuration, formatPrice } from '../utils/formatters';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/video/${video.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-[1.02]">
        <div className="aspect-video relative">
          <img 
            src={video.thumbnailUrl} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-md text-sm flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {formatDuration(video.duration)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
              {video.category}
            </span>
            <span className="flex items-center text-lg font-semibold text-gray-900">
              <Euro className="w-4 h-4 mr-1" />
              {formatPrice(video.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}