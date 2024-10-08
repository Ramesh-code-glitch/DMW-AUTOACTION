import React, { useState } from 'react';
import './SignIn.css'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="login-form">
            <div className="logo">
            <img className="logo_img" src="/AutoAction DMW Logo.png" alt="Logo" />
            </div>
            <h2>Parts Provider Login Only</h2>
            <p>Enter your login details below:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        value={formData.password} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password</a>
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="account-prompt">
                Click <a href="/register">Here</a> if you don't have an account
            </p>
        </div>
    );
};

export default LoginForm;
