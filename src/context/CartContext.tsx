import { createContext } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "CLEAR_CART" }
  | { type: "INCREMENT_ITEM"; payload: { id: string } }
  | { type: "DECREMENT_ITEM"; payload: { id: string } };

// Context type
export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | null>(null);
