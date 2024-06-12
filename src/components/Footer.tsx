import React from 'react';
import Newsletter from './SubscriptionForm.tsx'; //
import '../assets/styles/footer.css';

const Footer: React.FC = () => (
    <footer className="footer">
        <Newsletter />
        <div className="line"></div>
        <div className="text">
            <span className="txt">© 2024 Bookstore</span>
            <span className="txt">All rights reserved.</span>
        </div>
    </footer>
);

export default Footer;
