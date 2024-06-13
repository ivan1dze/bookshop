import { useState } from 'react';
import '../assets/styles/login.css';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () => {
        setIsSignIn(true);
    };

    const toggleSignUp = () => {
        setIsSignIn(false);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="tabs">
                    <button className={isSignIn ? "active" : ""} onClick={toggleSignIn}>Sign In</button>
                    <button className={!isSignIn ? "active" : ""} onClick={toggleSignUp}>Sign Up</button>
                </div>
                {isSignIn ? (
                    <div className="form-container">
                        <input type="email" placeholder="Your email" />
                        <input type="password" placeholder="Your password" />
                        <a href="#">Forgot password?</a>
                        <button className="submit-button">Sign In</button>
                    </div>
                ) : (
                    <div className="form-container">
                        <input type="email" placeholder="Your email" />
                        <input type="password" placeholder="Your password" />
                        <input type="password" placeholder="Confirm password" />
                        <button className="submit-button">Sign Up</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
