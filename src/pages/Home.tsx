import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Play className="h-12 w-12" />,
      title: 'Vidéos de qualité',
      description: 'Des cours filmés par des enseignants expérimentés',
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: 'Tous niveaux',
      description: 'Du niveau 2nde à Terminale',
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Communauté',
      description: "Rejoignez une communauté d'apprenants motivés",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      
      {/* Hero Section */}
      
      <div className="relative bg-gradient-to-r from-indigo-900 to-blue-900 h-[700px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight">
              Réussissez vos études avec{' '}
              <span className="text-yellow-400">OMAR</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Des cours vidéo de qualité pour les lycéens, accessibles à tout
              moment pour booster votre réussite scolaire.
            </p>
            <Link
              to="/browse"
              className="bg-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all inline-flex items-center space-x-2"
            >
              <span>Découvrir nos cours</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Pourquoi choisir{' '}
              <span className="text-indigo-600">OmarClass</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre plateforme offre une expérience d'apprentissage unique, conçue pour vous aider à exceller dans vos études.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-indigo-600 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Prêt à commencer votre apprentissage ?
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto">
            Rejoignez des milliers d'étudiants qui réussissent grâce à nos
            cours. Inscrivez-vous dès aujourd'hui et transformez votre avenir académique.
          </p>
          <Link
            to="/login"
            className="bg-yellow-400 text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all inline-flex items-center space-x-2"
          >
            <span>S'inscrire gratuitement</span>
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
