import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'; // Иконки

import '../assets/styles/header.css'; // Импорт стилей

const Header: React.FC = () => (
    <header className="header">
        <Link to="/" className="header-title">Bookstore</Link> {/* Название магазина */}
        <SearchBar /> {/* Поисковая строка */}
        <nav className="header-nav">
            <Link to="/liked" className="header-nav-item"><FaHeart /></Link> {/* Иконка лайка */}
            <Link to="/cart" className="header-nav-item"><FaShoppingCart /></Link> {/* Иконка корзины */}
            <Link to="/account" className="header-nav-item"><FaUser /></Link> {/* Иконка аккаунта пользователя */}
        </nav>
    </header>
);

export default Header;
