import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

import '../assets/styles/header.css';

const Header: React.FC = () => (
    <header className="header">
        <h1><Link to="/">BOOKSTORE</Link></h1>
        <SearchBar />
        <nav className="nav-icons">
            <Link to="/liked"><FaHeart /></Link>
            <Link to="/cart"><FaShoppingCart /></Link>
            <Link to="/account"><FaUser /></Link>
        </nav>
    </header>
);

export default Header;
