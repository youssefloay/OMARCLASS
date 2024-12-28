import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPreview from '../components/video/VideoPreview';
import PurchaseCard from '../components/video/PurchaseCard';
import VideoInfo from '../components/video/VideoInfo';

// Mock data - will be replaced with API call
const mockVideo = {
  id: '1',
  title: 'Les fonctions du second degré',
  description:
    'Cours complet sur les fonctions polynômes du second degré, leurs représentations graphiques et leurs applications. Vous apprendrez à:\n\n- Identifier une fonction du second degré\n- Calculer les racines et le sommet\n- Tracer la parabole\n- Résoudre des problèmes concrets',
  thumbnailUrl:
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  previewUrl: 'https://example.com/preview.mp4',
  category: 'premiere',
  price: 14.99,
  duration: 3600,
  createdAt: new Date().toISOString(),
};

export default function VideoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoPreview
            previewUrl={mockVideo.previewUrl}
            thumbnailUrl={mockVideo.thumbnailUrl}
            title={mockVideo.title}
          />

          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {mockVideo.title}
            </h1>

            <VideoInfo
              duration={mockVideo.duration}
              category={mockVideo.category}
              createdAt={mockVideo.createdAt}
            />

            <div className="mt-6 prose prose-indigo">
              {mockVideo.description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <PurchaseCard price={mockVideo.price} onPurchase={handlePurchase} />
          </div>
        </div>
      </div>
    </div>
  );
}
