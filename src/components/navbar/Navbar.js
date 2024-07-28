// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                JobBox
            </div>
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><a href="#findajob">Find a Job</a></li>
                <li><a href="#recruiters">Recruiters</a></li>
                <li><a href="#candidates">Candidates</a></li>
                <li><a href="#pages">Pages</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login"><button>Sign in</button></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
