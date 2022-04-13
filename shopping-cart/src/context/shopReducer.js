export const initialState = {
  totalPrice: 0,
  products: [],
};

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return { ...state, products: payload.products };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return { ...state, products: payload.products };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return { ...state, totalPrice: payload.totalPrice };
    default:
      throw new Error("No case!!!");
  }
};

export default shopReducer;
