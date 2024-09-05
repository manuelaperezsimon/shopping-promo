import { CartContext } from "../context/Shopping.context";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
