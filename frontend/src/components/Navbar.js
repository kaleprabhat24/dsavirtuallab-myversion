// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            {/* Logo and University Title */}
            <div className="header-top">
                <div className="logo">
                    <img src={require('./virtual-lab-logo.png')} alt="Virtual Lab Logo" className="logo-img" />
                </div>
             
                <div className="badge">
                    <img src={require('./rbu-logo.png')} alt="University Badge" className="badge-img" />
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/data-structures">Data Structures</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/AboutUS">About Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
