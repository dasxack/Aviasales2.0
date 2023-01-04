import React from 'react';
// import classes from './ticket.module.scss';
import { enumeration } from '../../utilites/enumeration';
import { getArrivalTime, getDepartureTime, getTravelTime } from '../../utilites/date';
import PropTypes from 'prop-types';
const Ticket = (props) => {
  const { price, carrier, segments } = props;
  const priceStr = String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  return (
    <div>
      <div>
        <div> {`${priceStr} \u20bd`} </div>
        <img alt="logo" src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      {segments.map((item) => (
        <div key={item.date}>
          <div>
            {item.origin}-{item.destination}
          </div>
          <div>В ПУТИ</div>
          <div>
            {item.stops.length} {enumeration(item.stops.length)}
          </div>
          <div>
            {getDepartureTime(item.date)} - {getArrivalTime(item.date, item.duration)}
          </div>
          <div> {getTravelTime(item.duration)}</div>
          <div> {item.stops.join(', ')}</div>
        </div>
      ))}
    </div>
  );
  // return (
  //   <div className={classes.price__ticket}>
  //     <ul className={classes.ticket__head}>
  //       <li className={classes.head_price}>{`${priceStr} \u20bd`}</li>
  //       <li className={classes.head_logo}>
  //         <img alt="logo" src={`//pics.avs.io/99/36/${carrier}.png`} />
  //       </li>
  //     </ul>
  //     {segments.map((item) => (
  //       <div className={classes['price__ticket-info']} key={item.date}>
  //         <ul className={classes.ticket__direction}>
  //           <li className={classes.direction_town}>
  //             {item.origin}-{item.destination}
  //           </li>
  //           <li className={classes.direction_time}>
  //             {getDepartureTime(item.date)} -{' '}
  //             {getArrivalTime(item.date, item.duration)}
  //           </li>
  //         </ul>
  //         <ul className={classes.ticket__direction}>
  //           <li className={classes.direction_way}>В ПУТИ</li>
  //           <li className={classes.direction_time}>
  //             {getTravelTime(item.duration)}
  //           </li>
  //         </ul>
  //         <ul className={classes.ticket__direction}>
  //           <li className={classes.direction_transfer}>
  //             {item.stops.length} {enumeration(item.stops.length)}
  //           </li>
  //           <li className={classes['direction_transfer-town']}>
  //             {item.stops.join(', ')}
  //           </li>
  //         </ul>
  //       </div>
  //     ))}
  //   </div>
  // )
};
Ticket.defaultProps = {
  price: 0,
  carrier: '',
  segments: [],
};
Ticket.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: PropTypes.array,
};
export default Ticket;
