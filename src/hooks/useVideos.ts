import { useState, useMemo } from 'react';
import { Video } from '../types';

export function useVideos(videos: Video[], search: string, category: string | null) {
  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesSearch = search === '' || 
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.description.toLowerCase().includes(search.toLowerCase());
        
      const matchesCategory = !category || video.category === category;
      
      return matchesSearch && matchesCategory;
    });
  }, [videos, search, category]);

  return filteredVideos;
}