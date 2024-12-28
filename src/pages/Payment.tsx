import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import PaymentForm from '../components/payment/PaymentForm';

// Mock data - replace with API call
const mockVideo = {
  id: '1',
  title: 'Les fonctions du second degré',
  price: 14.99,
};

export default function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return navigate('/login');
  }

  const handlePayment = async (cardDetails: any) => {
    // Mock payment processing - replace with actual payment API
    console.log('Processing payment:', cardDetails);
    // Redirect to video player after successful payment
    navigate(`/player/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Paiement
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {mockVideo.title}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <PaymentForm
            amount={mockVideo.price}
            onSubmit={handlePayment}
          />
        </div>
      </div>
    </div>
  );
}