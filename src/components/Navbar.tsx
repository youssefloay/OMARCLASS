import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, User, LogIn, Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { isAuthenticated, user } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-10 w-10 text-indigo-600" />
            <span className="font-bold text-2xl text-gray-800">OmarClass</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-gray-600 hover:text-indigo-600 transition duration-300">Parcourir</Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition duration-300">
                  <User className="h-5 w-5" />
                  <span>{user?.name}</span>
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="text-gray-600 hover:text-indigo-600 transition duration-300">Admin</Link>
                )}
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                <LogIn className="h-5 w-5" />
                <span>Connexion</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/browse" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition duration-300">Parcourir</Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition duration-300">
                  <span>{user?.name}</span>
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition duration-300">Admin</Link>
                )}
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-indigo-600 transition duration-300">
                Connexion
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
