import { CartItem } from "@/reducers/shoppingReducer";

export const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  const totalCost = items.reduce(
    (accumulator, item) =>
      accumulator + item.prices.salesPrice.value * item.quantity,
    0
  );
  return { totalItems, totalCost };
};

export const updateItemQuantity = (
  items: CartItem[],
  productCode: string,
  quantityChange: number
) => {
  return items.map((item) =>
    item.code === productCode
      ? { ...item, quantity: item.quantity + quantityChange }
      : item
  );
};
