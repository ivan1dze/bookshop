import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../assets/styles/likedpage.css';

interface LikedBooksProps {
    books: any[];
    likedBooks: string[];
    onLike: (isbn13: string) => void;
}

const LikedBooks: React.FC<LikedBooksProps> = ({ books, likedBooks, onLike }) => {
    const likedBooksList = books.filter(book => likedBooks.includes(book.isbn13));

    return (
        <div className="liked-books">
            <h1>Liked Books</h1>
            <div className="book-list">
                {likedBooksList.length > 0 ? (
                    likedBooksList.map((book) => (
                        <div className="book-item" key={book.isbn13}>
                            <img src={book.image} alt={book.title} />
                            <div className="book-info">
                                <h2>{book.title}</h2>
                                <p className="price">{book.price}</p>
                            </div>
                            <button className="like-button" onClick={() => onLike(book.isbn13)}>
                                {likedBooks.includes(book.isbn13) ? <FaHeart /> : <FaRegHeart className="unlike" />}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No liked books.</p>
                )}
            </div>
        </div>
    );
};

export default LikedBooks;
