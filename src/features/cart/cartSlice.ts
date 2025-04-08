import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getLocalStorageItem,
  localStorageCartKey,
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
    addItem: () => {},
    clearCart: () => {},
    removeItem: () => {},
    editItem: () => {},
    calculateTotals: () => {},
  },
});

export const { addItem, calculateTotals, clearCart, editItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
