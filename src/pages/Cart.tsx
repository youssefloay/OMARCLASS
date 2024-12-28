import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../utils/formatters';

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, clearCart } = useCartStore();
  
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    // Implement checkout logic
    clearCart();
    navigate('/payment');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <ShoppingCart className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">Mon panier</h1>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Votre panier est vide</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <CartItem
                key={item.id}
                video={item}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between text-lg font-medium text-gray-900 mb-4">
              <span>Total</span>
              <span>{formatPrice(total)} €</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Payer
            </button>
          </div>
        </>
      )}
    </div>
  );
}