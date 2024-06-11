import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import '../assets/styles/cart.css';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (isbn13: string) => {
        dispatch(removeFromCart({ isbn13 }));
    };

    const handleQuantityChange = (isbn13: string, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ isbn13, quantity }));
        }
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.isbn13}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <p>Price: ${item.price}</p>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.isbn13, parseInt(e.target.value))}
                                    min="1"
                                />
                                <button onClick={() => handleRemove(item.isbn13)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <p>Total Amount: ${calculateTotal()}</p>
                        <button onClick={handleClear}>Clear Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
