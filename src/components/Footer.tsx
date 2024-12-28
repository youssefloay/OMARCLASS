import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-10 w-10 text-yellow-400" />
              <span className="font-bold text-2xl text-white">Omarclass</span>
            </div>
            <p className="text-gray-400">Votre plateforme d'apprentissage en ligne pour réussir vos études.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>contact@omarclass.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>01 23 45 67 89</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">À propos</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-400 transition-colors duration-300">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-400 transition-colors duration-300">Politique de confidentialité</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400 transition-colors duration-300">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Restez informé de nos dernières nouvelles et offres.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                type="submit" 
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-300 transition-colors duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Omarclass. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
