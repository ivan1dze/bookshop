import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

import '../assets/styles/footer.css';

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="subscribe">
            <FaEnvelope className="subscribe-icon" />
            <span className="subscribe-text">Subscribe to our newsletter</span>
        </div>
        <div className="line"></div>
        <div className="text">
            <span>© 2024 Bookstore</span>
            <span>All rights reserved.</span>
        </div>
    </footer>
);

export default Footer;
