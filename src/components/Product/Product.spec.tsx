import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockProduct } from "../../mocks/product";
import ProductCard from "./Product";

describe("Given the ProductCard component", () => {
  describe("When called to render with all props", () => {
    test("Then it should render properly", async () => {
      render(<ProductCard product={mockProduct} />);

      const elements = [
        screen.getByText(mockProduct.supplier),
        screen.getByText(mockProduct.baseprice),
        screen.getByText(mockProduct.dosageForm),
        screen.getByTestId("shop-icon"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    test("Then it should render the correct number of stars", async () => {
      render(<ProductCard product={mockProduct} />);

      const fullStars = screen.getAllByTestId("full-star");
      const halfStars = screen.queryAllByTestId("half-star");

      expect(fullStars.length).toBe(5);
      expect(halfStars.length).toBe(0);
    });
  });
});
