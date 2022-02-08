import React from "react";
import { coldDishes } from "../../assets/data/Dishes";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.Main}>
      <ul className={classes.Category}>
        <li>
          <a href="#">Hot Dishes</a>
        </li>
        <li>
          <a href="#">Cold Dishes</a>
        </li>
        <li>
          <a href="#">Soup</a>
        </li>
        <li>
          <a href="#">Grill</a>
        </li>
        <li>
          <a href="#">Appetizer</a>
        </li>
        <li>
          <a href="#">Dessert</a>
        </li>
      </ul>
      <div className={classes.Wrapper}>
        <div className={classes.FoodList}>
          <h2>Choose Dishes</h2>
          <div>
            <button><i class="fal fa-chevron-down"></i></button>
            <input type="text" />
            <ul>
              <li>
                <a href="#">food</a>
              </li>
            </ul>
            {coldDishes.map((item) => {
              console.log(item);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
