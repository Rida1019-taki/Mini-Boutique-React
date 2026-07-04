import React from 'react';
import { GridIcon, LaptopIcon, DeviceIcon, HomeIcon } from './Icons';

function CategoryFilter({ category, setCategory }) {
  const categories = [
    { name: "Tous", icon: <GridIcon className="w-4 h-4" /> },
    { name: "Informatique", icon: <LaptopIcon className="w-4 h-4" /> },
    { name: "Électronique", icon: <DeviceIcon className="w-4 h-4" /> },
    { name: "Maison", icon: <HomeIcon className="w-4 h-4" /> }
  ];

  return (
    <div className="filter-wrapper">
      <span className="filter-heading">Filtrer par Catégorie</span>
      <div className="category-filter-chips">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`filter-chip ${category === cat.name ? 'active' : ''}`}
            onClick={() => setCategory(cat.name)}
          >
            <span className="chip-icon">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;