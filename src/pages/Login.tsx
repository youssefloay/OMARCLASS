import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import { useAuthStore } from '../store/authStore';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async (email: string, password: string) => {
    const mockUser = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'user' as const,
      purchasedVideos: [],
    };

    login(mockUser);
    navigate('/browse');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="text-center">
          <GraduationCap className="w-14 h-14 text-indigo-500 mx-auto" />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Connectez-vous</h2>
          <p className="mt-2 text-sm text-gray-600">
            Bienvenue sur <span className="font-medium text-indigo-600">OmarClass</span>
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            handleLogin(email, password);
          }}
          className="mt-8 space-y-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                placeholder="Entrez votre email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                placeholder="Entrez votre mot de passe"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
          >
            Connexion
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Nouveau sur OmarClass ?</p>
          <button
            onClick={() => navigate('/signup')}
            className="mt-3 w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50"
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}
