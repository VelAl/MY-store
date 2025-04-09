import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

import {
  getLocalStorageItem,
  localStorageCartKey,
  setLocalStorageItem,
  T_CartItem,
  type T_CartState,
} from "@/utils";

const initialState: T_CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500, // $5
  tax: 0,
  orderTotal: 0,
};

const savedCart = getLocalStorageItem<T_CartState>(localStorageCartKey);

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart || initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<T_CartItem>) => {
      const item = state.cartItems.find(
        ({ cartID }) => cartID === payload.cartID
      );

      if (item) {
        item.amount += payload.amount;
      } else {
        state.cartItems.push(payload);
      }

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Succsess!", {
        description: "The Item has been added to the cart.",
      });
    },
    clearCart: () => {
      localStorage.removeItem(localStorageCartKey);
      toast.warning("The Cart has been cleared.");
      return initialState;
    },
    removeItem: (state, { payload }: PayloadAction<T_CartItem>) => {
      state.cartItems = state.cartItems.filter(
        ({ cartID }) => cartID !== payload.cartID
      );

      cartSlice.caseReducers.calculateTotals(state);

      toast.info("The Item has been removed from the the cart.");
    },
    editItem: (
      state,
      { payload }: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const ind = state.cartItems.findIndex((i) => i.cartID === payload.cartID);
      state.cartItems[ind].amount = payload.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.info("Quantity of the product has been apdated");
    },
    calculateTotals: (state) => {
      state.numItemsInCart = state.cartItems.reduce(
        (akk, { amount }) => akk + amount,
        0
      );
      state.cartTotal = state.cartItems.reduce(
        (akk, { price, amount }) => akk + Number(price) * amount,
        0
      );
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      setLocalStorageItem(localStorageCartKey, state);
    },
  },
  selectors: {
    cartSelector: (state) => state,
  },
});

export const { addItem, calculateTotals, clearCart, editItem, removeItem } =
  cartSlice.actions;
export const { cartSelector } = cartSlice.selectors;

export default cartSlice.reducer;
