import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { formatDuration } from '../../utils/formatters';

interface VideoInfoProps {
  duration: number;
  category: string;
  createdAt: string;
}

export default function VideoInfo({ duration, category, createdAt }: VideoInfoProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {formatDuration(duration)}
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        {formattedDate}
      </div>
      <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium">
        {category}
      </span>
    </div>
  );
}