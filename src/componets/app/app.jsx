import React from 'react';
import classes from './app.module.scss';
import Filters from '../filters';
import Main from '../main';

const App = () => {
  return (
    <section className={classes.aviasales}>
      <header>
        {/* test */}
        <span className={classes['logo-container']}></span>
      </header>
      <section className={classes['main-container']}>
        <div className={classes['main-legs']}></div>
        <Filters />
        <Main />
        <div className={classes['main-legs']}></div>
      </section>
    </section>
  );
};
export default App;
