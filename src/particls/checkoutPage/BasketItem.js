import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../states/StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basketItem">
      <img className="productCheck__image" src={image} alt="" />
      <div className="productCheck__info">
        <p className="productCheck__title">{title}</p>
        <p className="productCheck__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="productCheck__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <StarIcon className="star" />;
              })}
          </p>
        </div>
        <button className="btn" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
