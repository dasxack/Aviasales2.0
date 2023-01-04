import React from 'react';
import classes from './main-filter.module.scss';

import { useDispatch } from 'react-redux';
import { cheapTickets, fastTickets, optimalTickets } from '../../redux/actions';
const MainFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes['main-filter']}>
      <button
        className={classes['filter-button']}
        onClick={() => {
          dispatch(cheapTickets());
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={classes['filter-button']}
        onClick={() => {
          dispatch(fastTickets());
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={classes['filter-button']}
        onClick={() => {
          dispatch(optimalTickets());
        }}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};
export default MainFilter;
