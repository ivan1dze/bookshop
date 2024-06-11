import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from './bookmarksSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        bookmarks: bookmarksReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
