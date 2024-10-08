import React from 'react';
import './cooling.css';
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';

const parts = [
  { name: 'Expansion Tanks', image: "/public/cooling.png" },
  { name: 'Fan Clutches', image: "/public/cooling.png" },
  { name: 'Fan', image: "/public/cooling.png" },
  { name: 'Fan & Parts', image: "/public/cooling.png" },
  { name: 'Intercoolers', image: "/public/cooling.png" },
  { name: 'Oil Coolers & Car Oil Pipes', image: "/public/cooling.png" },
  { name: 'Radiator Caps', image: "/public/cooling.png" },
  { name: 'Radiators', image: "/public/cooling.png" },
  { name: 'Switches & Sensors', image: "/public/cooling.png" },
  { name: 'Thermostats', image: "/public/cooling.png" },
  { name: 'Water Pumps', image: "/public/cooling.png" },
  { name: 'Heater Controls', image: "/public/cooling.png" },
  { name: 'Heater Motors', image: "/public/cooling.png" },
  { name: 'Sensors & Switches', image: "/public/cooling.png"},
  { name: 'Condensers', image: "/public/cooling.png" },
  { name: 'Compressors', image: "/public/cooling.png" },
  { name: 'Actuators', image: "/public/cooling.png" },
  { name: 'Air Conditioning Controls', image: "/public/cooling.png" },
  { name: 'AC Control Panel', image: "/public/cooling.png" },
];

const cooling= () => {
  return (
    <div>
    <Navbar/>
    <div className="parts-container">
      <h2 className="title">Cooling & Heating</h2>
      <p className="subtitle">Find your car part here.</p>
      <div className="grid">
        {parts.map((part, index) => (
          <div key={index} className="grid-item">
            <img src={part.image} alt={part.name} />
            <p>{part.name}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default cooling;
