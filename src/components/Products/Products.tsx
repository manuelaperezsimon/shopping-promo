"use client";
import React from "react";
import ProductCard from "../Product/Product";
import { Product } from "@/interfaces/product";
import Cart from "../Cart/Cart";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 p-4">
        <div
          data-testid="container"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {products.map((product) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
      </div>

      <div className="hidden md:flex md:flex-col md:w-96 mt-4">
        <Cart />
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-lg p-4 z-50">
        <Cart />
      </div>
    </div>
  );
};

export default Products;
