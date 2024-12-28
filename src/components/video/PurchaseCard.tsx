import React from 'react';
import { Euro, ShoppingCart } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

interface PurchaseCardProps {
  price: number;
  onPurchase: () => void;
}

export default function PurchaseCard({ price, onPurchase }: PurchaseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-600">Prix du cours</span>
        <div className="flex items-center text-2xl font-bold text-gray-900">
          <Euro className="w-5 h-5 mr-1" />
          {formatPrice(price)}
        </div>
      </div>
      
      <button
        onClick={onPurchase}
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        <ShoppingCart className="w-5 h-5" />
        Acheter maintenant
      </button>
      
      <div className="mt-4 text-sm text-gray-500 text-center">
        Accès illimité au cours
      </div>
    </div>
  );
}