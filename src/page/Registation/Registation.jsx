import React, { useState } from "react";
import './Registation.css';  

function Registation() {
  const [formData, setFormData] = useState({
    profileImage: null,
    name: '',
    username: '',
    email: '',
    phone: '',
    alternatePhone: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register-container">
      <div className="form-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>WANTS TO REGISTER AS A PART SUPPLIER?</h2>
        <p>Please fill the form below:</p>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <label>Profile Image</label>
        <input type="file" onChange={handleFileChange} />

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            name="alternatePhone"
            placeholder="Alternate Phone"
            value={formData.alternatePhone}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">REGISTER</button>

        <p className="SingUp">
          Already have an account? <a href="/SingUp">Login Now</a>
        </p>
      </form>
    </div>
  );
}

export default Registation;
