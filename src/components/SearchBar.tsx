import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const debouncedSearch = debounce((query) => {
            if (query) {
                navigate(`/search/${query}`);
            }
        }, 150);

        debouncedSearch(query);


        return () => {
            debouncedSearch.cancel();
        };
    }, [query, navigate]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search"
            />
        </form>
    );
};

export default SearchBar;
