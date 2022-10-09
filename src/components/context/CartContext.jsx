import { createContext, useState } from "react";

export const CartContext = createContext({
  toggleCart: false,
  setToggleCart: () => {},
  cart: {},
  setCart: () => {},
  zoom: false,
  setZoom: () => {},
});

const CartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState({});
  const [zoom, setZoom] = useState(false);

  const value = {
    toggleCart,
    setToggleCart,
    cart,
    setCart,
    zoom,
    setZoom,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
