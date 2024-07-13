// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3 className="footer-logo">JobBox</h3>
                    <p className="footer-description">
                        JobBox is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
                    </p>
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Feature</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Credit</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="#">iOS</a></li>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">Microsoft</a></li>
                        <li><a href="#">Desktop</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>More</h4>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Download App</h4>
                    <p>
                        Download our Apps and get extra 15% Discount on your first Order...!
                    </p>
                    <div className="footer-app-buttons">
                        <a href="#"><img src="app-store.png" alt="App Store" /></a>
                        <a href="#"><img src="google-play.png" alt="Google Play" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2022. JobBox all right reserved</p>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
