import React from 'react';
import './break.css';
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';

const brakePartsData = [
  { name: "Brake Disc", image: "/public/Brake-Drum.png" },
  { name: "Brake Drum", image:  "/public/Brake-Drum.png" },
  { name: "Abs Controller", image:  "/public/Brake-Drum.png" },
  { name: "Abs Hydraulic Unit", image:  "/public/Brake-Drum.png" },
  { name: "Abs Sensor", image:  "/public/Brake-Drum.png" },
  { name: "Master Cylinder", image:  "/public/Brake-Drum.png" },
  { name: "Vacuum Pump", image:  "/public/Brake-Drum.png" },
  { name: "Wheel Cylinder", image:  "/public/Brake-Drum.png" },
  { name: "Brake Servos", image:  "/public/Brake-Drum.png" },
  { name: "Hoses and Pipes", image:  "/public/Brake-Drum.png" },
  { name: "Brake Callipers", image:  "/public/Brake-Drum.png" }
];

const PartsBrake = () => {
  return (
    <div>
    < Navbar/>
    <div className="brake-parts-container">
      <h1 className="brake-parts-title">BREAK</h1>
      <p className="brake-parts-subtitle">Find your car part here.</p>
      <div className="brake-parts-grid">
        {brakePartsData.map((part, index) => (
          <div className="brake-part-item" key={index}>
            <img src={part.image} alt={part.name} className="brake-part-image" />
            <p className="brake-part-name">{part.name}</p>
          </div>
        ))}
      </div>
    </div>
    < Footer/>
    </div>
   
  );
};

export default PartsBrake;
