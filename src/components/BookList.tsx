import React, { useState } from 'react';
import BookCard from './BookCard';
import Pagination from './Pagination';
import '../assets/styles/booklist.css';

interface BookListProps {
    books: any[];
    likedBooks: string[];
    onLike: (isbn13: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, likedBooks, onLike }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;
    const totalPages = Math.ceil(books.length / booksPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const displayedBooks = books.slice(
        (currentPage - 1) * booksPerPage,
        currentPage * booksPerPage
    );

    return (
        <div>
            <div className="book-list">
                {displayedBooks && displayedBooks.length > 0 ? (
                    displayedBooks.map((book) => (
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
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default BookList;
