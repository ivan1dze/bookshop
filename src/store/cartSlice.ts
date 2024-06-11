import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    books: string[];
}

const initialState: CartState = {
    books: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            state.books.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(isbn => isbn !== action.payload);
        },
        clearCart: (state) => {
            state.books = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
