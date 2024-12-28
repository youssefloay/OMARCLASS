export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  previewUrl?: string;
  category: 'seconde' | 'premiere' | 'terminale';
  price: number;
  duration: number;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  purchasedVideos: string[];
}