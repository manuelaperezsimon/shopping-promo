import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./Products";
import { mockProducts } from "../../mocks/products";
import { CartProvider } from "../../context/Shopping.context";

const renderWithCartProvider = (ui: React.ReactElement) => {
  return render(<CartProvider>{ui}</CartProvider>);
};

describe("Given a Products Component", () => {
  describe("When is instantiated", () => {
    test("Then it should render correctly with a list of products", () => {
      renderWithCartProvider(<Products products={mockProducts} />);

      mockProducts.forEach((product) => {
        expect(screen.getByText(product.supplier)).toBeInTheDocument();
        expect(
          screen.getByText(product.prices.salesPrice.formattedValue)
        ).toBeInTheDocument();
      });
    });

    test("Then it should render product cards in a grid layout", () => {
      renderWithCartProvider(<Products products={mockProducts} />);

      const gridContainer = screen.getByTestId("container");
      expect(gridContainer).toHaveClass("grid");
      expect(gridContainer).toHaveClass("gap-4");
    });

    test("Then it should render the correct number of columns based on screen size", () => {
      renderWithCartProvider(<Products products={mockProducts} />);

      const gridContainer = screen.getByTestId("container");

      expect(gridContainer).toHaveClass("grid-cols-1");
      expect(gridContainer).toHaveClass("sm:grid-cols-2");
      expect(gridContainer).toHaveClass("md:grid-cols-3");
      expect(gridContainer).toHaveClass("lg:grid-cols-3");
    });
  });
});
