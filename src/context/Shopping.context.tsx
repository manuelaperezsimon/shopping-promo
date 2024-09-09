"use client";
import React, { createContext, useReducer, ReactNode, useEffect } from "react";
import {
  CartState,
  cartInitialState,
  cartReducer,
} from "../reducers/shoppingReducer";
import { Product } from "../interfaces/product";
import useLocalStorage from "../hooks/useLocalStorage";

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
  const [cart, setCart] = useLocalStorage<CartState>("cart", cartInitialState);
  const [state, dispatch] = useReducer(cartReducer, cart);

  useEffect(() => {
    setCart(state);
  }, [state, setCart]);

  const addToCart = (product: Product) => {
    if (product.available && product.stock > 0) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  const removeFromCart = (productCode: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productCode });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
