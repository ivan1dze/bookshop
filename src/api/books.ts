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

export const getBookByISBN = async (isbn13: string) => {
    const response = await axios.get(`${API_BASE_URL}/books/${isbn13}`);
    return response.data;
};

export const getSimilarBooks = async (isbn13: string) => {
    const bookDetails = await getBookByISBN(isbn13);
    const title = bookDetails.title.split(' ').slice(0, 3).join(' '); // берем 3 слова из названия для показа похожих книг
    const response = await axios.get(`${API_BASE_URL}/search/${title}`);
    return response.data;
};
