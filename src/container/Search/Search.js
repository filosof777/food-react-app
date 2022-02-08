import React from 'react';
import classes from './Search.module.scss';

function Search() {
  return (
    <div className={classes.Search}>
      <div>
        <h1>Jaguero Resto</h1>
        <p>Tuesday, 2 Feb 2021</p>
      </div>
      <form>
        <input type="text" placeholder="Search for food, coffe, etc.." />
        <button type="submit"><i className="far fa-search"></i></button>
      </form>
    </div>
  );
}

export default Search;
