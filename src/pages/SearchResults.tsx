import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchBooks } from '../api/books';
import BookCard from '../components/BookCard';

const SearchResults: React.FC = () => {
    const { query } = useParams<{ query: string }>();
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await searchBooks(query);
            setBooks(data?.books || []);
        };

        fetchBooks();
    }, [query]);

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <div className="book-list">
                {books.map((book) => (
                    <BookCard key={book.isbn13} book={book} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
