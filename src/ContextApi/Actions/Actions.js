export const getBasketTotal = (basket = []) =>
  basket?.reduce((total, product) => total + product.price, 0);
