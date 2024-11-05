/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext(0);

const New1 = ({ children }) => {
  const [cart, setCart] = useState(0);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default New1;
