import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBookByISBN } from '../api/books';
import { addToCart } from '../store/cartSlice';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../assets/styles/bookdetail.css';

const BookDetail: React.FC = () => {
    const { isbn13 } = useParams<{ isbn13: string }>();
    const [book, setBook] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBook = async () => {
            const data = await getBookByISBN(isbn13);
            setBook(data);
        };

        fetchBook();
    }, [isbn13]);

    if (!book) {
        return <div>Loading...</div>;
    }

    const rating = parseFloat(book.rating);

    const stars = Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
    ));

    const handleAddToCart = () => {
        dispatch(addToCart({
            isbn13: book.isbn13,
            title: book.title,
            price: parseFloat(book.price.replace('$', '')),
            quantity,
            image: book.image
        }));
    };

    return (
        <div className="book-detail-container">
            <div className="book-detail">
                <img src={book.image} alt={book.title} className="book-detail-image" />
                <div className="book-detail-info">
                    <h1>{book.title}</h1>
                    <p className="book-detail-price">{book.price}</p>
                    <div className="book-detail-rating">{stars}</div>
                    <p><strong>Authors:</strong> {book.authors}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Language:</strong> {book.language}</p>
                    <p><strong>Pages:</strong> {book.pages}</p>
                    <p><strong>Year:</strong> {book.year}</p>
                    <div className="quantity-container">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            min="1"
                            className="quantity-input"
                        />
                        <button className="book-detail-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="book-description">
                <h2>Description</h2>
                <p>{book.desc}</p>
            </div>
        </div>
    );
};

export default BookDetail;
