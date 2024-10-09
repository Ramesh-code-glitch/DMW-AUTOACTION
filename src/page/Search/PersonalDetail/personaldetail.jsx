import React, { useState } from 'react';
import './personaldetail.css'
import Navbar from '../../../component/Navbar/Navbar';
import Footer from '../../../component/Footer/Footer';

const PersonalDetail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    vehicleBrand: 'Audi',
    vehicleModel: 'A3',
    vehicleYear: 2010,
    selectedParts: ['Brake Disc'],
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <Navbar/>
    <div className="form-container">
    <div className="personal-details">
    <h3>Personal Details</h3>
    
    <div className="input-row">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
    </div>
    
    <div className="input-row">
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Your Address"
        value={formData.address}
        onChange={handleChange}
      />
    </div>
  
    <div className="input-row">
      <select name="state" value={formData.state} onChange={handleChange}>
        <option>Select State</option>
        <option>West Bengal</option>
        <option>Maharashtra</option>
        <option>Delhi</option>
        {/* Add other states */}
      </select>
      <select name="city" value={formData.city} onChange={handleChange}>
        <option>Select City</option>
        <option>Kolkata</option>
        <option>Mumbai</option>
        <option>Pune</option>
        {/* Add other cities */}
      </select>
    </div>
    
    <div className="input-row">
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value="India"
        readOnly
      />
    </div>
  
    <button className="previous-btn">Previous</button>
    <button className="save-btn">Save</button>
  </div>
  

      <div className="vehicle-details">
        <h3>Selected vehicle details</h3>
        <div className="vehicle-info">
        <img
        src="https://www.selectusedparts.com/assets/images/2019/08/20190511_101154.gif"
        alt="Vehicle Logo"
        className="vehicle-img"
      />
          <div className="vehicle-brand">Audi, {formData.vehicleModel}</div>
          <div className="vehicle-year">{formData.vehicleYear}</div>
        </div>
        <div className="selected-parts">
          <h4>Selected parts</h4>
          <div className="part-tag">
            {formData.selectedParts.map((part, index) => (
              <span key={index} className="part">
                {part} <button className="remove-part">✕</button>
              </span>
            ))}
          </div>
        </div>
        <textarea
          name="additionalInfo"
          placeholder="Any additional info (optional)"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PersonalDetail;