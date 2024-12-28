import { create } from 'zustand';
import { Video } from '../types';

interface CartState {
  items: Video[];
  addToCart: (video: Video) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (video) =>
    set((state) => ({
      items: [...state.items, video],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));