import { createSlice, PayloadAction, Middleware } from "@reduxjs/toolkit";
import { Products } from "../interfaces/products";
import { Tablet } from "../../interfaces/tablets";

export interface CartState {
  cart: Products[];
  cartCounter: number;
  selectedProduct: Products[];
  basketTablets: Tablet[];
}

const loadStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem("productsState");
    if (serializedState !== null) {
      return JSON.parse(serializedState) as CartState;
    }
  } catch (error) {
    console.error("Error loading state from local storage:", error);
  }
  return {
    cart: [],
    selectedProduct: [],
    basketTablets: [],
    cartCounter: 0,
  };
};

const initialState: CartState = loadStateFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const exists = state.cart.some(
        (product) => product.phoneId === action.payload.phoneId
      );
      if (!exists) {
        state.cart.push(action.payload);
        state.cartCounter++;
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.phoneId === action.payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.cartCounter = Math.max(0, state.cartCounter - 1);
      }
    },
    addBasketTablets: (state, action: PayloadAction<Tablet>) => {
      const exists = state.basketTablets.some(
        (tablet) => tablet.tabletId === action.payload.tabletId
      );
      if (!exists) {
        state.basketTablets.push(action.payload);
        state.cartCounter++;
      }
    },
    deleteBasketTablets: (state, action: PayloadAction<number>) => {
      const index = state.basketTablets.findIndex(
        (tablet) => tablet.tabletId === action.payload
      );
      if (index !== -1) {
        state.basketTablets.splice(index, 1);
        state.cartCounter = Math.max(0, state.cartCounter - 1);
      }
    },
    setSelectedCartProduct: (state, action: PayloadAction<Products[]>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  addBasketTablets,
  deleteBasketTablets,
  setSelectedCartProduct,
} = cartSlice.actions;

const saveStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("productsState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

export const persistMiddleware: Middleware<object, { cart: CartState }> =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState().cart;
    saveStateToLocalStorage(state);
    return result;
  };

export default cartSlice.reducer;
