import React from 'react';
import { X } from 'lucide-react';
import { Video } from '../../types';
import { formatPrice } from '../../utils/formatters';

interface CartItemProps {
  video: Video;
  onRemove: (id: string) => void;
}

export default function CartItem({ video, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="w-24 h-16 object-cover rounded"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-gray-900 truncate">{video.title}</h3>
        <p className="text-sm text-gray-500">{video.category}</p>
      </div>
      <div className="text-sm font-medium text-gray-900">{formatPrice(video.price)} €</div>
      <button
        onClick={() => onRemove(video.id)}
        className="p-1 text-gray-400 hover:text-gray-500"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}