import React from 'react';
import { useSelector } from 'react-redux';
// import styles from './spinner.module.scss';

const Spinner = () => {
  const spinner = useSelector((state) => state.loadReducer.loading);

  if (spinner) {
    return <div>loading</div>;
  } else {
    return null;
  }
};
export default Spinner;
