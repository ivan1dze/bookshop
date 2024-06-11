import React from 'react';
import BookCard from './BookCard';
import '../assets/styles/booklist.css';

interface BookListProps {
    books: any[];
    likedBooks: string[];
    onLike: (isbn13: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, likedBooks, onLike }) => {
    return (
        <div className="book-list">
            {books && books.length > 0 ? (
                books.map((book) => (
                    <BookCard
                        key={book.isbn13}
                        book={book}
                        onLike={onLike}
                        isLiked={likedBooks.includes(book.isbn13)}
                    />
                ))
            ) : (
                <p>No books available.</p>
            )}
        </div>
    );
};

export default BookList;
