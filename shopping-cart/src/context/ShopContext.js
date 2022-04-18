import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updateCart = state.products.concat(product);

    updatedPrice(updateCart);

    dispatch({ type: "ADD_TO_CART", payload: { products: updateCart } });
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );

    updatedPrice(updateCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updateCart },
    });
  };

  const updatedPrice = (products) => {
    let total = 0;
    products.forEach((p) => (total += p.price));
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const value = {
    addToCart,
    removeFromCart,
    total: state.total,
    products: state.products,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }
  return context;
};

export default useShop;
