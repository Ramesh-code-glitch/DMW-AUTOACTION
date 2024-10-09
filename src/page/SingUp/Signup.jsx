import React, { useState } from 'react';
import './Signup.css'

const Signup = () => {
    const [formData, setFormData] = useState({
        profileImage: '',
        name: '',
        username: '',
        email: '',
        phone: '',
        altPhone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
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
        <div className="registration-form">
            <h2>Wants to Register as a Part Supplier?</h2>
            <img className="logo_img" src="/AutoAction DMW Logo.png" alt="Logo" />
            <p>Please fill the form below:</p>
            <form onSubmit={handleSubmit}>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="altPhone">Alternate Phone</label>
                        <input type="text" name="altPhone" value={formData.altPhone} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profileImage">Profile Image</label>
                        <input type="file" name="profileImage" onChange={handleImageChange} />
                    </div>
                </div>

                <button type="submit">Register</button>
            </form>

            <p>Already have an account? <a href="http://localhost:5173/#/signin">Login Now</a></p>
        </div>
    );
};

export default Signup;
