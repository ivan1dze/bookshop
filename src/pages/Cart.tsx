import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartSlice';
import '../assets/styles/cart.css';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    // Save cart state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({ items: cartItems }));
    }, [cartItems]);

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
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.isbn13}>
                                <img src={item.image} alt={item.title} />
                                <div className="item-details">
                                    <h2>{item.title}</h2>
                                    <div className="quantity-control">
                                        <button onClick={() => handleQuantityChange(item.isbn13, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.isbn13, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <div className="item-price">${item.price.toFixed(2)}</div>
                                <button className="remove-item" onClick={() => handleRemove(item.isbn13)}>×</button>
                            </li>
                        ))}
                    </ul>
                    <div className="summary">
                        <div className="summary-total">
                            <p>Sum total: ${calculateTotal()}</p>
                            <p>VAT: ${(parseFloat(calculateTotal()) * 0.18).toFixed(2)}</p>
                            <h3>Total: ${(parseFloat(calculateTotal()) * 1.18).toFixed(2)}</h3>
                        </div>
                        <button className="checkout" onClick={handleClear}>Check Out</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
