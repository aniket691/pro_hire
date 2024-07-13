// src/RegistrationForm.js
import React, { useState } from 'react';
import '../register/RegisterForm.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        rePassword: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Start for free Today</h2>
                <p>Access to all features. No credit card required.</p>
                <button className="google-signup">Sign up with Google</button>
                <p className="or-continue">Or continue with</p>
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Username *</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password *</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Re-Password *</label>
                    <input
                        type="password"
                        name="rePassword"
                        value={formData.rePassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group terms">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                    />
                    <label>Agree our terms and policy</label>
                </div>
                <button type="submit" className="submit-button">Submit & Register</button>
                <p className="signin-link">Already have an account? <a href="#signin">Sign in</a></p>
            </form>
        </div>
    );
};

export default RegistrationForm;
