import React from 'react';
import './FCategorie.css';

const CategoriesSection = () => {
  const categories = [
    {
      name: 'Body Parts, Exhaust, Exterior Fittings',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1652161342-Body-Parts-,-Exhaust,-Exterior-Fittings.png',
      link: 'http://localhost:5173/#/body',
    },
    {
      name: 'Brakes',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1651491113-Brakes.png',
      link: 'http://localhost:5173/#/break',
    },
    {
      name: 'Car Electrics and Car Lighting',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1651559191-Car-Electrics-And-Lightning.png',
      link: 'http://localhost:5173/#/elight',
    },
    {
      name: 'Cooling & Heating',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1651555681-Cooling-and-Heating.png',
      link: 'http://localhost:5173/#/cooling',
    },
    {
      name: 'Dash board assy, Interior fittings, Air bag kits',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1652161203-Dash-board-assy,-Interior-fittings,--Air-bag-kits.png',
      link: 'http://localhost:5173/#/kit',
    },
    {
      name: 'Engine Parts',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1651559152-Engine-Parts-(1).png',
      link: 'http://localhost:5173/#/engine',
    },
    {
      name: 'Suspension & Steering',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1651491147-Suspension.png',
      link: 'http://localhost:5173/#/suspension',
    },
    {
      name: 'Transmission Parts',
      imageUrl: 'https://www.selectusedparts.com/assets/images/category-image/1651491184-Transmission-Parts.png',
      link: 'http://localhost:5173/#/transmission',
    },
  ];

  return (
    <section className="feature-categories">
      <h2>Feature Categories</h2>
      <p>Express your opinion on the future development of raroin.</p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <a href={category.link}>
              <img src={category.imageUrl} alt={category.name} />
              <p>{category.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
