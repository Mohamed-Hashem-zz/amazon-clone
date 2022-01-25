export const initialState = {
  basket: [],
  user: null,
};

// 1- Clone
// 2- Edit
// 3- Update

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, payload] };
    case "REMOVE_TO_BASKET":
      const index = state?.basket?.findIndex((p) => payload.id === p.id);
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: [...newBasket],
      };
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };
    default:
      return { ...state };
  }
};
