import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartProduct from "./CartProduct";
import { useCartContext } from "../../hooks/useCartContext";
import { mockCartProduct } from "../../mocks/product";

jest.mock("../../hooks/useCartContext", () => ({
  useCartContext: jest.fn(),
}));

const mockRemoveFromCart = jest.fn();
const mockAddToCart = jest.fn();

beforeEach(() => {
  (useCartContext as jest.Mock).mockReturnValue({
    cart: { items: [mockCartProduct] },
    removeFromCart: mockRemoveFromCart,
    addToCart: mockAddToCart,
  });
});

describe("Given a CartProduct component", () => {
  describe("When is instantiated", () => {
    test("Then it should renders product details", () => {
      render(<CartProduct product={mockCartProduct} />);

      const elements = [
        screen.getByText("Test Product"),
        screen.getByText("$10.00"),
        screen.getByText("1"),
      ];

      expect(screen.getByAltText("Test Product")).toHaveAttribute(
        "src",
        "http://example.com/image@2x.webp"
      );

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    test("Then it should calls removeFromCart on delete button click", () => {
      render(<CartProduct product={mockCartProduct} />);

      fireEvent.click(screen.getByTestId("trash-icon"));
      expect(mockRemoveFromCart).toHaveBeenCalledWith("123");
    });

    test('Then it should calls handleQuantityChange with correct arguments when "+" is clicked', async () => {
      render(<CartProduct product={mockCartProduct} />);

      await fireEvent.click(screen.getByRole("button", { name: "+" }));
      expect(mockAddToCart).toHaveBeenCalledWith(mockCartProduct);
    });

    test('Then it should calls handleQuantityChange with correct arguments when "-" button is clicked', () => {
      render(<CartProduct product={{ ...mockCartProduct, quantity: 5 }} />);

      fireEvent.click(screen.getByRole("button", { name: "-" }));
      expect(mockRemoveFromCart).toHaveBeenCalledWith("123");
    });

    test('Then it should to disabled "+" button when quantity is equal to stock', () => {
      render(<CartProduct product={{ ...mockCartProduct, quantity: 5 }} />);

      expect(screen.getByRole("button", { name: "+" })).toBeDisabled();
    });

    test('Then it should to disabled "-" button when quantity is 0', () => {
      render(<CartProduct product={{ ...mockCartProduct, quantity: 0 }} />);

      expect(screen.getByRole("button", { name: "-" })).toBeDisabled();
    });
  });
});
