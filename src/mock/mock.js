export const getTicketMock = [
  {
    id: 1,
    price: '13400 Р',
    MowHktTime: '10:45-08:00',
    wayTime: '21ч 15м',
    transfer: '2 ПЕРЕСАДКИ',
  },
  {
    id: 2,
    price: '13400 Р',
    MowHktTime: '10:45-08:00',
    wayTime: '21ч 15м',
    transfer: '2 ПЕРЕСАДКИ',
  },
  {
    id: 3,
    price: '13400 Р',
    MowHktTime: '10:45-08:00',
    wayTime: '21ч 15м',
    transfer: '2 ПЕРЕСАДКИ',
  },
  {
    id: 4,
    price: '13400 Р',
    MowHktTime: '10:45-08:00',
    wayTime: '21ч 15м',
    transfer: '2 ПЕРЕСАДКИ',
  },
  {
    id: 5,
    price: '13400 Р',
    MowHktTime: '10:45-08:00',
    wayTime: '21ч 15м',
    transfer: '2 ПЕРЕСАДКИ',
  },
];
// const element = getTicketMock.map((el) => {
// 	const { price, MowHktTime, wayTime, transfer, id } = el
// 	return (
// 		<div className={classes.price__ticket} key={id}>
// 			<ul className={classes.ticket__head}>
// 				<li className={classes.head_price}>{price}</li>
// 				<li className={classes.head_logo}></li>
// 			</ul>
// 			<div className={classes['price__ticket-info']}>
// 				<ul className={classes.ticket__direction}>
// 					<li className={classes.direction_town}>MOW-NKT</li>
// 					<li className={classes.direction_time}>{MowHktTime}</li>
// 				</ul>
// 				<ul className={classes.ticket__direction}>
// 					<li className={classes.direction_way}>В ПУТИ</li>
// 					<li className={classes.direction_time}>{wayTime}</li>
// 				</ul>
// 				<ul className={classes.ticket__direction}>
// 					<li className={classes.direction_transfer}>{transfer}</li>
// 					<li className={classes['direction_transfer-town']}>NKG,JMB</li>
// 				</ul>
// 			</div>
// 			<div className={classes['price__ticket-info']}>
// 				<ul className={classes.ticket__direction}>
// 					<li className={classes.direction_town}>MOW-NKT</li>
// 					<li className={classes.direction_time}>{MowHktTime}</li>
// 				</ul>
// 				<ul className={classes.ticket__direction}>
// 					<li className={classes.direction_way}>В ПУТИ</li>
// 					<li className={classes.direction_time}>{wayTime}</li>
// 				</ul>
// 				<ul className={classes.ticket__direction}>
// 					<li className={classes.direction_transfer}>{transfer}</li>
// 					<li className={classes['direction_transfer-town']}>NKG,JMB</li>
// 				</ul>
// 			</div>
// 		</div>

// const element = ticket.map((el) => {
// 	const { price, carrier, segments } = el
// 	const priceStr = String(price).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
// 	return (
// 		<div className={classes.price__ticket}>
// 			<ul className={classes.ticket__head}>
// 				<li className={classes.head_price}>{`${priceStr} \u20bd`}</li>
// 				<li className={classes.head_logo}>
// 					<img alt="logo" src={`//pics.avs.io/99/36/${carrier}.png`} />
// 				</li>
// 			</ul>
// 			{segments.map((item) => (
// 				<div className={classes['price__ticket-info']} key={item.date}>
// 					<ul className={classes.ticket__direction}>
// 						<li className={classes.direction_town}>
// 							{item.origin}-{item.destination}
// 						</li>
// 						<li className={classes.direction_time}>?????</li>
// 					</ul>
// 					<ul className={classes.ticket__direction}>
// 						<li className={classes.direction_way}>В ПУТИ</li>
// 						<li className={classes.direction_time}>{item.stops.length}</li>
// 					</ul>
// 					<ul className={classes.ticket__direction}>
// 						<li className={classes.direction_transfer}>transfer</li>
// 						<li className={classes['direction_transfer-town']}>
// 							{item.stops.join(', ')}
// 						</li>
// 					</ul>
// 				</div>
// 			))}
// 		</div>
// 	)
// })
//
//
//
//
//
//
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
