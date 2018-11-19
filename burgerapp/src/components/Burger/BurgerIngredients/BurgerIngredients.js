import React from "react";
import classes from "./BurgerIngredients.css";

const burgerIngredients = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div classname={classes.Seeds1} />
          <div classname={classes.Seeds1} />
        </div>
      );
      break;
    case "meat":
      <div className={classes.Meat} />;
      break;
    case "cheese":
      <div className={classes.Cheese} />;
      break;
  }
};

export default burgerIngredients;
