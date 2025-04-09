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

      state.numItemsInCart += payload.amount;
      state.cartTotal += +payload.price * payload.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Succsess!", {
        description: "Item has been added to cart.",
      });
    },
    clearCart: () => {
      localStorage.removeItem(localStorageCartKey);
      return initialState;
    },
    removeItem: (state, { payload }: PayloadAction<T_CartItem>) => {
      state.cartItems = state.cartItems.filter(
        ({ cartID }) => cartID !== payload.cartID
      );

      state.numItemsInCart -= payload.amount;
      state.cartTotal -= +payload.price * payload.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast("Succsess!", {
        description: "Item has been removed from the cart.",
        action: {
          label: "Undo",
          onClick: () =>
            cartSlice.caseReducers.addItem(state, {
              payload,
              type: cartSlice.caseReducers.addItem.toString(), // returns action type
            }),
        },
      });
    },
    editItem: (
      state,
      { payload }: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const ind = state.cartItems.findIndex((i) => i.cartID === payload.cartID);
      state.cartItems[ind].amount += payload.amount;
      state.numItemsInCart += payload.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Quantity of the product has been apdated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      setLocalStorageItem(localStorageCartKey, state);
    },
  },
});

export const { addItem, calculateTotals, clearCart, editItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
