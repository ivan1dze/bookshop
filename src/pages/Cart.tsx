import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart } from '../store/cartSlice';

const Cart: React.FC = () => {
    const books = useSelector((state: RootState) => state.cart.books);
    const dispatch = useDispatch();

    const handleRemove = (isbn: string) => {
        dispatch(removeFromCart(isbn));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h1>Cart</h1>
            {books.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <ul>
                    {books.map(isbn => (
                        <li key={isbn}>
                            <span>{isbn}</span>
                            <button onClick={() => handleRemove(isbn)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {books.length > 0 && <button onClick={handleClear}>Clear Cart</button>}
        </div>
    );
};

export default Cart;
