import React from 'react';
import './body.css';
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';

const partsData = [
  { name: "Body Panels", image: "/public/Body-Panels.png" },
  { name: "Doors", image: "/public/Body-Panels.png" },
  { name: "Bonnet Tail Gate Strut", image: "/public/Body-Panels.png" },
  { name: "Bonnet catch/lock", image: "/public/Body-Panels.png" },
  { name: "Bonnet", image: "/public/Body-Panels.png" },
  { name: "Bumpers", image: "/public/Body-Panels.png" },
  { name: "Fuel Tank and cap", image: "/public/Body-Panels.png" },
  { name: "Grills", image: "/public/Body-Panels.png" },
  { name: "Handles/lock", image: "/public/Body-Panels.png" },
  { name: "Lock", image: "/public/Body-Panels.png" },
  { name: "Wheel ARCHES", image: "/public/Body-Panels.png" },
  { name: "WHEEL CAPS", image: "/public/Body-Panels.png" },
  { name: "Window Regulators", image: "/public/Body-Panels.png" },
  { name: "Wind Screen Washer Kits", image: "/public/Body-Panels.png" },
  { name: "Side Mirrors", image: "/public/Body-Panels.png" },
  { name: "Engine Under Tray", image: "/public/Body-Panels.png" },
  { name: "Catalytic Converter", image: "/public/Body-Panels.png" },
  { name: "Exhaust System", image: "/public/Body-Panels.png" },
  { name: "Wiper Arm", image: "/public/Body-Panels.png" },
  { name: "Wiper Motor", image: "/public/Body-Panels.png" }
];

const Parts = () => {
  return (
    <div>
    < Navbar/>
    <div className="parts-container">
      <h1 className="parts-title">BODY PARTS</h1>
      <p className="parts-subtitle">Find your car part here.</p>
      <div className="parts-grid">
        {partsData.map((part, index) => (
          <div className="part-item" key={index}>
            <img src={part.image} alt={part.name} className="part-image" />
            <p className="part-name">{part.name}</p>
          </div>
        ))}
      </div>
    </div>
    < Footer/>
    </div>
  );
};

export default Parts;
