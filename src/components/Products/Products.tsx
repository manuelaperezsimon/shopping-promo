"use client";
import React from "react";
import ProductCard from "../Product/Product";
import { Product } from "@/interfaces/product";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps): JSX.Element => {
  return (
    <div className="p-4">
      <div
        data-testid="container"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
      >
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
