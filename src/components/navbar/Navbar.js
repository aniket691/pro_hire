// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                MyLogo
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#findajob">Find a Job</a></li>
                <li><a href="#recruiters">Recruiters</a></li>
                <li><a href="#candidates">Candidates</a></li>
                <li><a href="#pages">Pages</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#register">Register</a></li>
                <li><button>Sign in</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
