import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./Products";
import { mockProducts } from "../../mocks/products";

describe("Given a Products Component", () => {
  describe("When is instantiated", () => {
    test("Then it should renders correctly with a list of products", () => {
      render(<Products products={mockProducts} />);

      mockProducts.forEach((product) => {
        expect(screen.getByText(product.supplier)).toBeInTheDocument();
        expect(
          screen.getByText(product.prices.salesPrice.formattedValue)
        ).toBeInTheDocument();
      });
    });

    test("Then it should renders product cards in a grid layout", () => {
      render(<Products products={mockProducts} />);

      const gridContainer = screen.getByTestId("container");
      expect(gridContainer).toHaveClass("grid");
      expect(gridContainer).toHaveClass("gap-4");
    });

    test("Then it should renders correct number of columns based on screen size", () => {
      render(<Products products={mockProducts} />);

      const gridContainer = screen.getByTestId("container");

      expect(gridContainer).toHaveClass("grid-cols-1");
      expect(gridContainer).toHaveClass("sm:grid-cols-2");
      expect(gridContainer).toHaveClass("md:grid-cols-3");
      expect(gridContainer).toHaveClass("lg:grid-cols-3");
    });
  });
});
