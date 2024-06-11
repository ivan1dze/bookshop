import axios from 'axios';

const API_BASE_URL = 'https://api.itbook.store/1.0';

export const getNewBooks = async () => {
    const response = await axios.get(`${API_BASE_URL}/new`);
    return response.data;
};

export const getBookDetails = async (isbn13: string) => {
    const response = await axios.get(`${API_BASE_URL}/books/${isbn13}`);
    return response.data;
};

export const searchBooks = async (query: string, page: number = 1) => {
    const response = await axios.get(`${API_BASE_URL}/search/${query}/${page}`);
    return response.data;
};

// Убедитесь, что эта функция уже правильно названа
export const getBookByISBN = async (isbn13: string) => {
    const response = await axios.get(`${API_BASE_URL}/books/${isbn13}`);
    return response.data;
};
