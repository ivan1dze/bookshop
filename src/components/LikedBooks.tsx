import React from 'react';
import BookCard from './BookCard';
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
                        <BookCard
                            key={book.isbn13}
                            book={book}
                            onLike={onLike}
                            isLiked={likedBooks.includes(book.isbn13)}
                        />
                    ))
                ) : (
                    <p>No liked books.</p>
                )}
            </div>
        </div>
    );
};

export default LikedBooks;
