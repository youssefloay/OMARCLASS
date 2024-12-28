import React from 'react';
import { Users, Video, DollarSign, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: number;
}

function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-indigo-100 rounded-full">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <TrendingUp className={`w-4 h-4 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`} />
        <span className={`ml-2 text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(trend)}% vs mois dernier
        </span>
      </div>
    </div>
  );
}

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="Utilisateurs actifs"
        value="1,234"
        icon={<Users className="w-6 h-6 text-indigo-600" />}
        trend={12}
      />
      <StatsCard
        title="Vidéos publiées"
        value="156"
        icon={<Video className="w-6 h-6 text-indigo-600" />}
        trend={8}
      />
      <StatsCard
        title="Revenus mensuels"
        value="9,876 €"
        icon={<DollarSign className="w-6 h-6 text-indigo-600" />}
        trend={-3}
      />
      <StatsCard
        title="Ventes"
        value="432"
        icon={<TrendingUp className="w-6 h-6 text-indigo-600" />}
        trend={15}
      />
    </div>
  );
}