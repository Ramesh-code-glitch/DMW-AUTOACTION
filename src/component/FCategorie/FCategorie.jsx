import React from "react";
import "./FCategorie.css";

const FeatureCategories = () => {
  const categories = [
    { image: "/public/Body-Parts.png", label: "Body Parts, Exhaust, Exterior Fittings",},
    { image: "/public/Brakes.png", label: "Brakes" },
    { image: "/public/Electrics & Lightning.png", label: "Car Electrics and Car Lighting" },
    { image: "/public/Cooling-and-Heating.png", label: "Cooling & Heating" },
    { image: "/public/Air-bag-kits.png", label: "Dash board assy, Interior fittings, Air bag kits",},
    { image: "/public/Engine-Parts.png", label: "Engine Parts" },
    { image: "/public/Suspension.png", label: "Suspension & Steering" },
    { image: "/public/Transmission-Parts.png", label: "Transmission Parts" },
  ];

  return (
    <div className="feature-categories">
      <h2>FEATURE CATEGORIES</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.label} />
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategories;
