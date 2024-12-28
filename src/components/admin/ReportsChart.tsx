import React from 'react';
import { BarChart, Bar } from 'lucide-react';

interface ReportData {
  label: string;
  value: number;
}

interface ReportsChartProps {
  data: ReportData[];
  title: string;
}

export default function ReportsChart({ data, title }: ReportsChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-4">
        <BarChart className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}