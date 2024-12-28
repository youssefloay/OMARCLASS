import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

// Admin credentials
const ADMIN_EMAIL = 'admin@omarclass.com';
const ADMIN_PASSWORD = 'Admin@123';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials: { email: string; password: string }) => {
    if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
      const adminUser = {
        id: 'admin',
        email: ADMIN_EMAIL,
        name: 'Admin',
        role: 'admin' as const,
        purchasedVideos: [],
      };
      set({ user: adminUser, isAuthenticated: true });
      return adminUser;
    }
    
    // Mock regular user login
    const user = {
      id: '1',
      email: credentials.email,
      name: 'User',
      role: 'user' as const,
      purchasedVideos: [],
    };
    set({ user, isAuthenticated: true });
    return user;
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));