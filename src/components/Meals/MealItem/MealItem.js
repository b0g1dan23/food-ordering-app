import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function MealItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);

  const mealPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id: id, name: name, amount: amount, price: price });
  };

  return (
    <li>
      <div className={classes.meal}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
}
export default MealItem;
