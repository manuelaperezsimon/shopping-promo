"use client";
import { Product } from "../interfaces/product";
import {
  CartState,
  cartInitialState,
  cartReducer,
} from "../reducers/shoppingReducer";

import React, { createContext, useReducer, ReactNode, useContext } from "react";

interface CartContextProps {
  cart: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productCode: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: Product) => {
    if (product.available && product.stock > 0) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  const removeFromCart = (productCode: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productCode });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
