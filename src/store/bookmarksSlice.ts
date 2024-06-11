import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarksState {
    books: string[];
}

const initialState: BookmarksState = {
    books: [],
};

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        addBookmark: (state, action: PayloadAction<string>) => {
            state.books.push(action.payload);
        },
        removeBookmark: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(isbn => isbn !== action.payload);
        },
    },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
