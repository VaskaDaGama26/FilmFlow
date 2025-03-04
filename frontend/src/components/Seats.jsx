import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from '../css-modules/Seats.module.scss';
import reservedSeat from '../static/ReservedSeat.svg';
import freeSeat from '../static/seat.svg';
import img from '../static/rope.jpg';
import date_icon from '../static/date_icon.svg';
import time_icon from '../static/time_icon.svg';
import screen from '../static/screen.svg';
import receipt from '../static/receipt.svg';
import { fetchSeatMap, bookSeat } from '../api';

const Seats = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seatMap, setSeatMap] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const rows = 10;
  const cols = 8;

  // fetch seatmap
  useEffect(() => {
    const fetchSeatMapData = async () => {
      try {
        const response = await fetchSeatMap(id);
        setSeatMap(response.data.seat_map);
      } catch (error) {
        console.error('Failed to fetch seat map:', error);
      }
    };
    fetchSeatMapData();
  }, [id]);

  const handleSeatClick = async (row, number) => {
    try {
      const response = await bookSeat(id, row, number);
      setSeatMap(prevSeatMap =>
        prevSeatMap.map(seat =>
          seat.row === row && seat.number === number ? { ...seat, reserved: true } : seat
        )
      );
    } catch (error) {
      console.error('Failed to book seat:', error);
    }
  };

  const renderRows = () => {
    let table = [];
    for (let i = 1; i <= rows; i++) {
      let children = [];
      for (let j = 1; j <= cols; j++) {
        const seat = seatMap.find(seat => seat.row === i && seat.number === j);
        const isReserved = seat && seat.reserved;
        children.push(
          <td key={`${i}-${j}`}>
            {isReserved ? (
              <button className={classes.icon__button__reserved} disabled>
                <img className={classes.seat} src={reservedSeat} alt="Reserved" />
              </button>
            ) : (
              <button className={classes.icon__button} onClick={() => handleSeatClick(i, j)}>
                <img className={classes.seat} src={freeSeat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" />
              </button>
            )}
          </td>
        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };


  return (
    <div className={classes.container}>
      <div className={classes.room}>
        <img className={classes.screen} src={screen} alt="/" />
        <div className={classes.scheme}>
          <table>
            <tbody>
              {renderRows()}
            </tbody>
          </table>
        </div>

        <div className={classes.tip}>
          <ul>
            <li><div className={`${classes.square} ${classes.square__reserved}`} />- Reserved</li>
            <li><div className={`${classes.square} ${classes.square__free}`} />- Free</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Seats
