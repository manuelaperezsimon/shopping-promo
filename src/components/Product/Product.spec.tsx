import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../../context/Shopping.context"; // Adjust import path as needed
import ProductCard from "./Product";
import { mockProduct } from "../../mocks/product";

const renderWithCartProvider = (ui: React.ReactElement) => {
  return render(<CartProvider>{ui}</CartProvider>);
};

describe("Given the ProductCard component", () => {
  describe("When called to render with all props", () => {
    test("Then it should render properly", async () => {
      renderWithCartProvider(<ProductCard product={mockProduct} />);

      const elements = [
        screen.getByText(mockProduct.supplier),
        screen.getByText(mockProduct.baseprice),
        screen.getByText(mockProduct.dosageForm),
        screen.getByTestId("shop-icon"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    test("Then it should render the correct number of stars", async () => {
      renderWithCartProvider(<ProductCard product={mockProduct} />);

      const fullStars = screen.getAllByTestId("full-star");
      const halfStars = screen.queryAllByTestId("half-star");

      expect(fullStars.length).toBe(5);
      expect(halfStars.length).toBe(0);
    });
  });
});
