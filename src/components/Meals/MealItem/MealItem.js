import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

function MealItem({ name, description, price }) {
  const mealPrice = `$${price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.meal}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
        <div>
          <MealItemForm />
        </div>
      </div>
    </li>
  );
}
export default MealItem;
