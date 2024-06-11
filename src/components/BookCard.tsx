import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from 'react-icons/fa';

interface BookCardProps {
    book: {
        isbn13: string;
        title: string;
        price: string;
        image: string;
        rating: string;
    };
    onLike: (isbn13: string) => void;
    isLiked: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, onLike, isLiked }) => {
    const rating = parseFloat(book.rating);

    const stars = Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
    ));

    return (
        <div className="book-card">
            <Link to={`/books/${book.isbn13}`}>
                <img src={book.image} alt={book.title} />
            </Link>
            <h3>{book.title}</h3>
            <p>Price: {book.price}</p>
            <div className="rating">{stars}</div>
            <button onClick={() => onLike(book.isbn13)}>
                {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
        </div>
    );
};

export default BookCard;
