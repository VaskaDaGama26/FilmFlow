import React, { useState } from 'react';
import Button from '../assets/Button';
import classes from '../css-modules/Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import { ACCESS_TOKEN } from '../constants';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(username, password);
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user data
            setUser(response.data.user);
            setIsAuthenticated(true);
            // Redirect to the desired page after login
            navigate('/tickets');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error (show message to the user, etc.)
        }
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Log in</h1>
            <form className={classes.login__form} onSubmit={handleSubmit}>
                <div className={classes.form__group}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <a className={classes.register__link} href="/register/">Still don't have an account? Register!</a>
                <Button label='Log in' type='submit' />
            </form>
        </div>
    );
};

export default Login;
