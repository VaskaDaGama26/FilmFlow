import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../css-modules/RoomSessions.module.scss';
import date_icon from '../static/date_icon.svg';
import time_icon from '../static/time_icon.svg';
import Button from '../assets/Button';
import { fetchSchedules } from '../api';

const RoomSessions = () => {
    const { id } = useParams();
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedulesData = async () => {
            try {
                const response = await fetchSchedules(id);
                setSchedules(response.data.grouped_schedules);
            } catch (error) {
                console.error('Failed to fetch schedules:', error);
            }
        };
        fetchSchedulesData();
    }, [id]);

    const groupSchedulesByDate = (schedules) => {
        return schedules.reduce((acc, schedule) => {
            const date = schedule.session.date;
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(schedule);
            return acc;
        }, {});
    };

    const groupedSchedules = groupSchedulesByDate(schedules);

    return (
        <div className={classes.container}>
            <div className={classes.sessions}>
                {Object.keys(groupedSchedules).map(date => (
                    <div key={date} className={classes.sessions__day}>
                        <h2 className={classes.sessions__header}>{date}</h2>
                        <ul className={classes.list}>
                            {groupedSchedules[date].map(schedule => (
                                <li key={schedule.id} className={classes.list__item}>
                                    <img className={classes.poster} src={`http://127.0.0.1:8000${schedule.session.film.poster}`} alt="#" />
                                    <div className={classes.specs}>
                                        <p className={classes.title}>{schedule.session.film.title}</p>
                                        <p><img src={time_icon} alt="Time Icon" /> {schedule.session.time}</p>
                                        <p><img src={date_icon} alt="Date Icon" /> {schedule.session.date}</p>
                                        <a href={`/seats/${schedule.id}`}><Button label='Choose Seats' /></a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomSessions;
