import React, { useState } from 'react';
import classes from '../css-modules/Register.module.scss';
import Button from '../assets/Button';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            // Handle password mismatch error (show message to the user, etc.)
            console.error('Passwords do not match');
            return;
        }

        try {
            await registerUser(username, password);
            // Redirect to the login page after successful registration
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error (show message to the user, etc.)
        }
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Register</h1>
            <form className={classes.register__form} onSubmit={handleSubmit}>
                <div className={classes.form__group}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <p>Letters, digits and @/./+/-/_ only.</p>
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
                    <p>Must contain at least 8 characters.</p>
                </div>
                <div className={classes.form__group}>
                    <label htmlFor="passwordConfirm">Password confirmation:</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                </div>
                <a className={classes.register__link} href="/login/">Do you already have an account? Login!</a>
                <Button label='Register' type='submit' />
            </form>
        </div>
    );
};

export default Register;
