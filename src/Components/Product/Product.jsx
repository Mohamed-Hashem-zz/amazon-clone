import React from "react";
import { useStateValue } from "../../ContextApi/StateProvider/StateProvider";
import "./Product.css";

export default function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item to reducer (data layer)
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((item, key) => (
                <p key={key}>💥</p>
              ))}
          </div>
        </div>
        <img src={image} alt="Hello" />
        <button
          onClick={(product) => addToBasket(product)}
          style={{ cursor: "pointer" }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
