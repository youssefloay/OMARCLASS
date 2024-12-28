import React from 'react';
import { User } from '../../types';

interface AccountInfoProps {
  user: User;
}

export default function AccountInfo({ user }: AccountInfoProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Informations personnelles
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-500">Nom</label>
          <div className="mt-1 text-sm text-gray-900">{user.name}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Email</label>
          <div className="mt-1 text-sm text-gray-900">{user.email}</div>
        </div>
      </div>
    </div>
  );
}