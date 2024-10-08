import React from 'react';
import './elight.css'
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';

const partsData= [
    { image: '/public/elight.png', name: 'Alarms, Immobilisers & Horns' },
    { image: '/public/elight.png', name: 'Alternators' },
    { image: '/public/elight.png', name: 'Charging Cables' },
    { image: '/public/elight.png', name: 'Regulator Relays' },
    { image: '/public/elight.png', name: 'Starter Motors' },
    { image: '/public/elight.png', name: 'Switches & Sensors' },
    { image: '/public/elight.png', name: 'Tyre Pressure Sensors' },
    { image: '/public/elight.png', name: 'Bumper Lights' },
    { image: '/public/elight.png', name: 'Driving & Fog Lamps' },
    { image: '/public/elight.png', name: 'Headlight Cleaning Systems' },
    { image: '/public/elight.png', name: 'Headlights' },
    { image: '/public/elight.png', name: 'Indicators' },
    { image: '/public/elight.png', name: 'Interior Lights' },
    { image: '/public/elight.png', name: 'License Plate Lights' },
    { image: '/public/elight.png', name: 'Rear Lights' },
    { image: '/public/elight.png', name: 'Reflectors' },
];

const elight = () => {
    return (
        <div>
        <Navbar/>
        <div className="parts-container">
            <h1>Car Electrics and Car Lighting</h1>
            <p>Find your car part here.</p>
            <div className="grid">
                {partsData.map((part, index) => (
                    <div className="card" key={index}>
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

export default elight;
