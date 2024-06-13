import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    isbn13: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
}

// Load initial cart state from localStorage
const loadState = (): CartState => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return { items: [] };
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Could not load cart state from localStorage', e);
        return { items: [] };
    }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.items.find(item => item.isbn13 === action.payload.isbn13);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart(state, action: PayloadAction<{ isbn13: string }>) {
            state.items = state.items.filter(item => item.isbn13 !== action.payload.isbn13);
        },
        updateQuantity(state, action: PayloadAction<{ isbn13: string, quantity: number }>) {
            const item = state.items.find(item => item.isbn13 === action.payload.isbn13);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
