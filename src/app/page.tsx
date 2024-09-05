import React from "react";
import { CartProvider } from "../context/Shopping.context";
import products from "../data/products.json";
import { Product } from "../interfaces/product";
import Products from "../components/Products/Products";

export default function Home() {
  const productsTyped: Product[] = products as Product[];

  return (
    <CartProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Products products={productsTyped} />
      </main>
    </CartProvider>
  );
}
