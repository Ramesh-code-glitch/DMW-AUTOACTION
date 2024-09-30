import React, { useState } from 'react';
import './SearchP1.css';

const VehicleDetails = () => {
  const [part, setPart] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handlePartChange = (e) => {
    setPart(e.target.value);
  };

  const handleInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  return (
    <div className="vehicle-details-container">
      <div className="progress-bar">
        <div className="step active">
          <span>1</span>
        </div>
        <div className="line active"></div>
        <div className="step">
          <span>2</span>
        </div>
        <div className="line"></div>
        <div className="step">
          <span>3</span>
        </div>
        <div className="line"></div>
        <div className="step">
          <span>4</span>
        </div>
      </div>

      <div className="search-section">
        <div className="search-parts">
          <h4>Search parts</h4>
          <input 
            type="text" 
            placeholder="Type part name e.g belt, light" 
            value={part} 
            onChange={handlePartChange} 
          />
          <button>Add</button>
        </div>

        <div className="vehicle-details">
          <h4>Selected vehicle details</h4>
          <div className="vehicle-info">
            <h5>SELECTED BRAND</h5>
            <div className="brand">
              <img src="path-to-audi-logo" alt="Audi" />
              <div>
                <p><strong>MODEL</strong></p>
                <p>Audi, A3</p>
              </div>
              <div>
                <p><strong>YEAR</strong></p>
                <p>2019</p>
              </div>
            </div>
          </div>

          <div className="additional-info">
            <h5>Any additional info (optional):</h5>
            <textarea 
              placeholder="Type here..." 
              value={additionalInfo} 
              onChange={handleInfoChange}
            />
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="back-btn">Back</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default VehicleDetails;
