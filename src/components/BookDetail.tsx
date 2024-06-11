import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookByISBN } from '../api/books';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../assets/styles/bookdetail.css';

const BookDetail: React.FC = () => {
    const { isbn13 } = useParams<{ isbn13: string }>();
    const [book, setBook] = useState<any>(null);

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

    // Парсим рейтинг к числу
    const rating = parseFloat(book.rating);

    // Создаем массив звезд на основе рейтинга
    const stars = Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? <FaStar /> : <FaRegStar />}</span>
    ));

    return (
        <div className="book-detail"> {/* Исправлено: Добавлен класс для обертки */}
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} />
            <p>{book.subtitle}</p>
            <p>Price: {book.price}</p>
            <p>Description: {book.desc}</p>
            <p>Authors: {book.authors}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Year: {book.year}</p>
            <div className="rating">{stars}</div> {/* Исправлено: Добавлен класс для рейтинга */}
        </div>
    );
};

export default BookDetail;
