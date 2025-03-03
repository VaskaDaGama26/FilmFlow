import React from 'react'
import classes from '../css-modules/RoomSessions.module.scss'

import img from '../static/rope.jpg'

import date_icon from '../static/date_icon.svg'
import time_icon from '../static/time_icon.svg'

import Button from '../assets/Button'

const RoomSessions = () => {
    return (
        <div className={classes.container}>
            <div className={classes.sessions}>
                <div className={classes.sessions__day}>
                    <h2 className={classes.sessions__header}>March 03, 2025</h2>
                    <ul className={classes.list}>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 03, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 03, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 03, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 03, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes.sessions__day}>
                    <h2 className={classes.sessions__header}>March 04, 2025</h2>
                    <ul className={classes.list}>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 04, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 04, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 04, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                        <li className={classes.list__item}>
                            <img className={classes.poster} src={img} alt="#" />
                            <div className={classes.specs}>
                                <p className={classes.title}>Rope</p>
                                <p><img src={time_icon} />16:30:00</p>
                                <p><img src={date_icon} />March 04, 2025</p>
                                <a href="/seats/"><Button label='Choose Seats' /></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RoomSessions