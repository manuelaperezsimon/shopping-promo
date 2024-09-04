import { Product } from "@/interfaces/product";
import { calculateTotals, updateItemQuantity } from "../utils/utils";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalCost: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" };

export const cartInitialState: CartState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.code === product.code
      );

      let updatedItems;
      if (existingItem) {
        updatedItems = updateItemQuantity(state.items, product.code, 1);
      } else {
        updatedItems = [...state.items, { ...product, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    }

    case "REMOVE_FROM_CART": {
      const productCode = action.payload;
      const itemToRemove = state.items.find(
        (item) => item.code === productCode
      );

      if (!itemToRemove) return state;

      let updatedItems;
      if (itemToRemove.quantity > 1) {
        updatedItems = updateItemQuantity(state.items, productCode, -1);
      } else {
        updatedItems = state.items.filter((item) => item.code !== productCode);
      }

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    }

    case "CLEAR_CART":
      return cartInitialState;

    default:
      return state;
  }
};
