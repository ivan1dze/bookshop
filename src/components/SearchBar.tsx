import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search/${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} placeholder="Search books..." />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
