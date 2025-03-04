import React, { useState, useEffect } from 'react';
import classes from '../css-modules/Tickets.module.scss';

const Tickets = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchTicketsData = async () => {
      try {
        const response = await fetchTickets();
        setSeatMap(response.data.seat_map);
      } catch (error) {
        console.error('Failed to fetch tickets:', error);
      }
    };
    fetchTicketsData();
  }, []);


  return (
    <div className={classes.container}>
      {user && <h1 className={classes.header}>Welcome, {user.username}!</h1>}
      <h1 className={classes.header}>My Tickets</h1>
      <div className={classes.tickets__block}>
        <h4 className={classes.date}>March 4, 2025</h4>
        <ul className={classes.tickets__list}>
          <li>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
          <li>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
          <li>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
        </ul>
      </div>
      <div className={classes.tickets__block}>
        <h4 className={classes.date}>March 3, 2025</h4>
        <ul className={classes.tickets__list}>
          <li>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
          <li>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
          <li>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
        </ul>
      </div>
      <div className={`${classes.tickets__block} ${classes.tickets__block__past}`}>
        <h4 className={classes.date}>March 2, 2025</h4>
        <ul className={classes.tickets__list}>
          <li className={classes.past}>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
          <li className={classes.past}>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
          <li className={classes.past}>12:00 Rope, Зал: Blue Room, Ряд: 1, Место: 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
