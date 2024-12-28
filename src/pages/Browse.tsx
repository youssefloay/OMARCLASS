import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import VideoCard from '../components/VideoCard';
import { useVideos } from '../hooks/useVideos';

// Temporary mock data - will be replaced with API calls
const mockVideos = [
  {
    id: '1',
    title: 'Les fonctions du second degré',
    description:
      'Cours complet sur les fonctions polynômes du second degré, leurs représentations graphiques et leurs applications.',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'premiere',
    price: 14.99,
    duration: 3600,
    createdAt: new Date().toISOString(),
  },
  // Add more mock videos...
];

export default function Browse() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredVideos = useVideos(mockVideos, search, selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Parcourir nos cours
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      {filteredVideos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Aucun cours ne correspond à votre recherche.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
