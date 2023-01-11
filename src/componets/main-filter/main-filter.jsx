import React from 'react';
import { useState } from 'react';
import classes from './main-filter.module.scss';

import { useDispatch } from 'react-redux';
import { cheapTickets, fastTickets, optimalTickets } from '../../redux/actions';
const MainFilter = () => {
  const dispatch = useDispatch();
  const [defaultButton, setDefaultButton] = useState(true);
  let classNameButton = 'filter-button-default';
  if (!defaultButton) {
    classNameButton = 'filter-button';
  }
  return (
    <div className={classes['main-filter']}>
      <button
        className={classes['filter-button']}
        onClick={() => {
          setDefaultButton(false);
          dispatch(cheapTickets());
        }}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={classes['filter-button']}
        onClick={() => {
          setDefaultButton(false);
          dispatch(fastTickets());
        }}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={classes[classNameButton]}
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
