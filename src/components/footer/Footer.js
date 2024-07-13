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
                        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/our-team">Our Team</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="/feature">Feature</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/credit">Credit</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="/ios">iOS</a></li>
                        <li><a href="/android">Android</a></li>
                        <li><a href="/microsoft">Microsoft</a></li>
                        <li><a href="/desktop">Desktop</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>More</h4>
                    <ul>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/help">Help</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Download App</h4>
                    <p>
                        Download our Apps and get extra 15% Discount on your first Order...!
                    </p>
                    <div className="footer-app-buttons">
                        <a href="https://www.apple.com/app-store/"><img src="app-store.png" alt="App Store" /></a>
                        <a href="https://play.google.com/store"><img src="google-play.png" alt="Google Play" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2022. JobBox all right reserved</p>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-conditions">Terms & Conditions</a></li>
                    <li><a href="/security">Security</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
