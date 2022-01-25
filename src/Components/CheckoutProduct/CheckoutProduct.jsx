import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider/StateProvider";
import "./CheckoutProduct.css";

export default function CheckoutProduct({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // dispatch item to reducer (data layer)
    dispatch({
      type: "REMOVE_TO_BASKET",
      payload: {
        id,
      },
    });
  };
  return (
    <>
      <div className="checkoutProduct">
        <img src={image} alt="Hello" className="checkoutProduct__img" />
        <div className="checkoutProduct__info">
          <p>{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((item, index) => (
                <p key={index}>💥</p>
              ))}
          </div>
        </div>
        <button
          onClick={() => removeFromBasket()}
          style={{ cursor: "pointer" }}
        >
          Remove From Basket
        </button>
      </div>
    </>
  );
}
