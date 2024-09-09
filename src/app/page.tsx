"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { CartProvider } from "../context/Shopping.context";
import products from "../data/products.json";
import { Product } from "../interfaces/product";
import Products from "../components/Products/Products";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const productsTyped: Product[] = products as Product[];

  return (
    <CartProvider>
      <Head>
        <title>Doc Morris</title>
        <meta
          name="description"
          content="Explora nuestra amplia gama de productos en Tu Tienda Online. Encuentra lo que necesitas con precios competitivos y una experiencia de compra sin igual."
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {isClient && <Products products={productsTyped} />}
      </main>
    </CartProvider>
  );
}
