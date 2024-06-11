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
        <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} />
            <p>{book.subtitle}</p>
            <p>Price: {book.price}</p>
            <p>Description: {book.desc}</p>
            <p>Authors: {book.authors}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Year: {book.year}</p>
            <div className="rating">{stars}</div>
            <div>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                />
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default BookDetail;
