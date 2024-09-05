import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./Cart";
import { useCartContext } from "../../hooks/useCartContext";
import { mockCart } from "../../mocks/products";

jest.mock("../../hooks/useCartContext", () => ({
  useCartContext: jest.fn(),
}));

describe("Given a Cart component", () => {
  beforeEach(() => {
    (useCartContext as jest.Mock).mockReturnValue({
      cart: mockCart,
    });
  });

  const productQuatity = "Summe (2 Produkte)";

  describe("When its instantiated", () => {
    test("Then it should renders cart with products", () => {
      const title = "Zum Warenkorb hinzugefügt";
      const productName = mockCart.items[0].name;

      render(<Cart />);

      const elements = [
        screen.getByText(title),
        screen.getByText(productName),
        screen.getByText(productQuatity),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    test("Then it should shows empty cart message when there are no items", () => {
      const emptyCartText = "Der Einkaufswagen ist leer.";

      (useCartContext as jest.Mock).mockReturnValue({
        cart: { items: [] },
      });

      render(<Cart />);

      expect(screen.getByText(emptyCartText)).toBeInTheDocument();
    });

    test(" Then it should shows subtotal and total items correctly", () => {
      render(<Cart />);

      const elements = [
        screen.getByTestId("subtotal"),
        screen.getByText(productQuatity),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
