import React from 'react';
import Main from '../../container/Main/Main';
import Search from '../../container/Search/Search';
import Order from '../../container/Order/Order';
import classes from './Home.module.scss';

function Home() {
  return (
    <div className={classes.Home}>
      <div className={classes.Main}>
        <Search />
        <Main />
      </div>
      <Order />
    </div>
  );
}

export default Home;
