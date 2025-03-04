import React, { useState, useEffect } from 'react';
import classes from '../css-modules/Header.module.scss';
import logo from '../static/logo.png';
import burger from '../static/burger.svg';
import close from '../static/close.svg';
import Button from '../assets/Button';
import { useNavigate } from 'react-router-dom';
import { fetchRooms } from '../api';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    // prohibit scrolling while menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // fetch rooms
    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const response = await fetchRooms();
                setRooms(response.data);
            } catch (error) {
                console.error('Failed to fetch rooms:', error);
            }
        };
        fetchRoomData();
    }, []);

    const handleLogout = () => {
        setIsAuthenticated(false);
        navigate('/logout/');
    };

    const renderNav = () => (
        <nav>
            <ul className={classes.roomList__nav}>
                {rooms.map(room => (
                    <li key={room.id}><a className={classes.link} href={`/rooms/${room.id}`}>{room.name}</a></li>
                ))}
            </ul>
        </nav>
    );

    const renderAuth = () => (
        <div className={classes.auth}>
                    <a href="/login/"><Button label="Log in" /></a>
                    <a href="/register/"><Button label="Sign in" /></a>
                    <a href="/logout/"><Button label="Log out" onClick={handleLogout} /></a>
        </div>
    );

    return (
        <header className={classes.container}>
            {/* Desktop Menu */}
            <div className={classes.desktopMenu}>
                <div className={classes.logo}><a href="/"><img src={logo} alt="Logo" /></a></div>
                {renderNav()}
                {renderAuth()}
            </div>

            {/* Mobile Menu */}
            <div className={classes.mobileMenu}>
                <div className={classes.logo}><a href="/"><img src={logo} alt="Logo" /></a></div>
                <div className={classes.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={burger} alt="Menu" />
                </div>
                <div className={`${classes.sideMenu} ${isMenuOpen ? classes.open : ''}`}>
                    <div className={classes.close} onClick={() => setIsMenuOpen(prevState => !prevState)}>
                        <img src={close} alt="Close" />
                    </div>
                    {renderNav()}
                    {renderAuth()}
                </div>
            </div>
        </header>
    );
};

export default Header;
