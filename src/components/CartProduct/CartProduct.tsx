"use client";
import React from "react";
import Button from "../Button/Button";
import { FiTrash2 } from "react-icons/fi";
import { CartItem } from "../../reducers/shoppingReducer";
import { useCartContext } from "@/hooks/useCartContext";

interface ProductProps {
  product: CartItem;
}

const CartProduct = ({ product }: ProductProps): JSX.Element => {
  const { cart, removeFromCart, addToCart } = useCartContext();
  const { images, name, prices, quantity, stock } = product;

  const imageUrl =
    images[0]?.variants["100"].formats.webp.resolutions["2x"].url;

  const handleRemove = (productCode: string) => {
    removeFromCart(productCode);
  };

  const handleQuantityChange = (productCode: string, increment: boolean) => {
    const item = cart.items.find((item) => item.code === productCode);
    if (!item) return;

    if (increment) {
      addToCart(item);
    } else {
      if (item.quantity >= 1) {
        removeFromCart(productCode);
      }
    }
  };

  return (
    <div className="flex items-center space-x-2  py-2">
      <img src={imageUrl} alt={name} className="w-16 h-16 object-cover" />
      <div className="flex-1 flex justify-between items-center">
        <div className="flex-1 mr-4">
          <div className="flex">
            <p className="font-semibold">{name}</p>
            <div className="flex items-center space-x-4">
              <FiTrash2
                onClick={() => handleRemove(product.code)}
                className="w-5 h-5 p-0 text-slate-600 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
              <Button
                text="-"
                actionOnClick={() => handleQuantityChange(product.code, false)}
                textColor="text-gray-700"
                className="w-8 h-8 p-0"
                bgColor="bg-white"
                disabled={quantity === 0}
              />
              <span className="mx-2">{quantity}</span>
              <Button
                text="+"
                actionOnClick={() => handleQuantityChange(product.code, true)}
                textColor="text-gray-700"
                className="w-8 h-8 p-0"
                bgColor="bg-white"
                disabled={stock === 0 || quantity === stock}
              />
            </div>

            <p className="text-gray-600">{prices.salesPrice.formattedValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
