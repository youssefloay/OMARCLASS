import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const categories = [
  { id: 'seconde', label: '2nde' },
  { id: 'premiere', label: 'Première' },
  { id: 'terminale', label: 'Terminale' }
];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition
          ${!selectedCategory 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        Tous
      </button>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${selectedCategory === category.id
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}