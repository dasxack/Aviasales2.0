import React from 'react';
import MainFilter from '../main-filter';
// import classes from './main.module.scss';
import TicketList from '../ticketList';
const Main = () => {
  return (
    <div>
      <MainFilter />
      <TicketList />
    </div>
  );
};
export default Main;
