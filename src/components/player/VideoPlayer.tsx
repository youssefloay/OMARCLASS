import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <video
        className="w-full h-full"
        src={videoUrl}
        controls
        controlsList="nodownload"
        poster="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
        title={title}
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/20 rounded-full">
              <Play className="w-6 h-6" />
            </button>
            <div className="text-sm font-medium">{title}</div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/20 rounded-full">
              <Volume2 className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-white/20 rounded-full">
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}