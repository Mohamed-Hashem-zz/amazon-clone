import React from "react";
import "./Checkout.css";
import Subtotal from "./../../Components/Subtotal/Subtotal";
import { useStateValue } from "../../ContextApi/StateProvider/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";

export default function Checkout() {
  const [state] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ads"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>

          <div className="basket">
            {state?.basket?.map((product, index) => (
              <div key={index}>
                <CheckoutProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
