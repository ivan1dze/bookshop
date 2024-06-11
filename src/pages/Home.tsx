import React from 'react';
import BookList from '../components/BookList';

interface HomeProps {
    books: any[];
    likedBooks: string[];
    onLike: (isbn13: string) => void;
}

const Home: React.FC<HomeProps> = ({ books, likedBooks, onLike }) => {
    return (
        <div>
            <h1>New Releases</h1>
            <BookList books={books} likedBooks={likedBooks} onLike={onLike} />
        </div>
    );
};

export default Home;
