import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import BookDetail from './components/BookDetail';
import SearchResults from './pages/SearchResults';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import LikedBooks from './components/LikedBooks';
import { getNewBooks } from './api/books';
import Footer from "./components/Footer";
import Login from './pages/login';

const App: React.FC = () => {
    const [books, setBooks] = useState<any[]>([]);
    const [likedBooks, setLikedBooks] = useState<string[]>(() => {
        const savedLikes = localStorage.getItem('likedBooks');
        return savedLikes ? JSON.parse(savedLikes) : [];
    });

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getNewBooks();
            setBooks(data.books);
        };

        fetchBooks();
    }, []);

    const handleLike = (isbn13: string) => {
        setLikedBooks((prevLikedBooks) => {
            const newLikedBooks = prevLikedBooks.includes(isbn13)
                ? prevLikedBooks.filter((id) => id !== isbn13)
                : [...prevLikedBooks, isbn13];

            localStorage.setItem('likedBooks', JSON.stringify(newLikedBooks));
            return newLikedBooks;
        });
    };

    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home books={books} likedBooks={likedBooks} onLike={handleLike} />} />
                    <Route path="/books/:isbn13" element={<BookDetail />} />
                    <Route path="/search/:query" element={<SearchResults />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/liked" element={<LikedBooks books={books} likedBooks={likedBooks} onLike={handleLike} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;
