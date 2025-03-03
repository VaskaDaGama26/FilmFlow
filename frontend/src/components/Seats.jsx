import React from 'react'
import classes from '../css-modules/Seats.module.scss'
import reservedSeat from '../static/ReservedSeat.svg'
import seat from '../static/seat.svg'
import img from '../static/rope.jpg'
import date_icon from '../static/date_icon.svg'
import time_icon from '../static/time_icon.svg'
import screen from '../static/screen.svg'
import receipt from '../static/receipt.svg'

const Seats = () => {
  return (
    <div className={classes.container}>

      <div className={classes.film}>
        <img className={classes.poster} src={img} alt="#" />
        <div className={classes.specs}>
          <p className={classes.title}>Rope</p>
          <div className={classes.datetime}>
            <p><img src={time_icon} />16:30:00</p>
            <p><img src={date_icon} />March 03, 2025</p>
          </div>

        </div>
      </div>

      <div className={classes.room}>
        <img className={classes.screen} src={screen} alt="/" />
        <div className={classes.scheme}>
            <table>
              <tbody>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>
                <tr>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button}><img className={classes.seat} src={seat} alt="Free" /><img className={classes.receipt} src={receipt} alt="Free" /></button></td>
                  <td><button className={classes.icon__button} disabled><img src={reservedSeat} alt="Reserved" /></button></td>
                </tr>



              </tbody>
            </table>
        </div>
        
        <div className={classes.tip}>
            <ul>
              <li><div className={`${classes.square} ${classes.square__reserved}`} />- Reserved</li>
              <li><div className={`${classes.square} ${classes.square__free}`}/>- Free</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Seats