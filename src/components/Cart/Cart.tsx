"use client";
import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import { useCartContext } from "@/hooks/useCartContext";

const Cart = () => {
  const { cart } = useCartContext();

  const subtotal = cart.items.reduce(
    (accumulator, item) =>
      accumulator + item.prices.salesPrice.value * item.quantity,
    0
  );

  const totalItems = cart.items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <div className="fixed bottom-0 left-0 w-full md:w-96 bg-white shadow-lg rounded-t-lg md:rounded-lg border border-gray-200 p-4 z-50 md:relative md:shadow-lg md:border-gray-200">
      <div className="flex justify-between md:hidden py-4">
        <p className="text-lg font-medium">Total</p>
        <div>
          <p className="text-lg font-bold">${subtotal.toFixed(2)}</p>
          <p className="text-sm text-gray-600">
            ({totalItems} {totalItems === 1 ? "Produkt" : "Produkte"})
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-col h-full">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Zum Warenkorb hinzugefügt
        </h2>
        <ul className="flex-1 overflow-y-auto">
          {cart.items.length === 0 ? (
            <li className="text-center py-4">Der Einkaufswagen ist leer.</li>
          ) : (
            cart.items.map((product) => (
              <li
                key={product.code}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <CartProduct product={product} />
              </li>
            ))
          )}
        </ul>
        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-lg font-medium">Total</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">
              Summe ({totalItems} {totalItems === 1 ? "Produkt" : "Produkte"})
            </p>
            <p className="text-sm text-gray-600">${subtotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
