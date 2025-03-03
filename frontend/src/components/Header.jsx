import React from 'react'
import classes from '../css-modules/Header.module.scss'
import logo from '../static/logo.png'
import burger from '../static/burger.svg'

import Button from '../assets/Button'

const Header = () => {
    return (
        <header className={classes.container}>
            <div className={classes.logo}><a href="/"><img src={logo} /></a></div>
                <nav>
                    <ul className={classes.roomList__nav}>
                        <li><a className={classes.link} href="/rooms/">Blue Room</a></li>
                        <li><a className={classes.link} href="/rooms/">Green Room</a></li>
                        <li><a className={classes.link} href="/rooms/">Red Room</a></li>
                        <li><a className={classes.link} href="/rooms/">Orange Room</a></li>
                    </ul>
                </nav>
                <div className={classes.auth}>
                    <a href="/login/"><Button label='Log in' /></a>
                    <a href="/register/"><Button label='Sign in' /></a>
                    {/* <a href="/tickets/"><Button label='My Tickets' /></a>*/}
                </div>
                <div className={classes.burger}><img src={burger} alt="Menu" /></div>
        </header>
    )
}

export default Header