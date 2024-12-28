import React from 'react';
import { Play } from 'lucide-react';

interface VideoPreviewProps {
  previewUrl?: string;
  thumbnailUrl: string;
  title: string;
}

export default function VideoPreview({ previewUrl, thumbnailUrl, title }: VideoPreviewProps) {
  return (
    <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-900">
      <img 
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      {previewUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <button className="p-4 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all transform hover:scale-110">
            <Play className="w-8 h-8 text-indigo-600" />
          </button>
        </div>
      )}
    </div>
  );
}