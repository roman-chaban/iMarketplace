import { createSlice, PayloadAction, Middleware } from '@reduxjs/toolkit';
import { Products } from '../interfaces/products';
import { Tablet } from '../../interfaces/tablets';
import { Accessories } from '../../interfaces/accessories';

export interface CartState {
  cart: Products[];
  cartCounter: number;
  selectedProduct: Products[];
  basketTablets: Tablet[];
  cartAccessories: Accessories[];
}

const loadStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState !== null) {
      return JSON.parse(serializedState) as CartState;
    }
  } catch (error) {
    console.error('Error loading state from local storage:', error);
  }
  return {
    cart: [],
    selectedProduct: [],
    basketTablets: [],
    cartAccessories: [],
    cartCounter: 0,
  };
};

const saveStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (error) {
    console.error('Error saving state to local storage:', error);
  }
};

const initialState: CartState = loadStateFromLocalStorage();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      if (!state.cart) {
        state.cart = [];
      }
      const exists = state.cart.some(
        (product) => product.phoneId === action.payload.phoneId
      );
      if (!exists) {
        state.cart.push(action.payload);
        state.cartCounter++;
        saveStateToLocalStorage(state);
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.phoneId === action.payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.cartCounter = Math.max(0, state.cartCounter - 1);
        saveStateToLocalStorage(state);
      }
    },
    addBasketTablets: (state, action: PayloadAction<Tablet>) => {
      if (!state.basketTablets) {
        state.basketTablets = [];
      }
      const exists = state.basketTablets.some(
        (tablet) => tablet.tabletId === action.payload.tabletId
      );
      if (!exists) {
        state.basketTablets.push(action.payload);
        state.cartCounter++;
        saveStateToLocalStorage(state);
      }
    },
    deleteBasketTablets: (state, action: PayloadAction<number>) => {
      const index = state.basketTablets.findIndex(
        (tablet) => tablet.tabletId === action.payload
      );
      if (index !== -1) {
        state.basketTablets.splice(index, 1);
        state.cartCounter = Math.max(0, state.cartCounter - 1);
        saveStateToLocalStorage(state);
      }
    },
    addAccessoriesToCart: (state, action: PayloadAction<Accessories>) => {
      if (!state.cartAccessories) {
        state.cartAccessories = [];
      }
      const exists = state.cartAccessories.some(
        (product) => product.id === action.payload.id
      );
      if (!exists) {
        state.cartAccessories.push(action.payload);
        state.cartCounter++;
        saveStateToLocalStorage(state);
      }
    },
    deleteAccessoriesFromCart: (state, action: PayloadAction<string>) => {
      const index = state.cartAccessories.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cartAccessories.splice(index, 1);
        state.cartCounter = Math.max(0, state.cartCounter - 1);
        saveStateToLocalStorage(state);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.basketTablets = [];
      state.cartAccessories = [];
      state.cartCounter = 0;
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
  addAccessoriesToCart,
  deleteAccessoriesFromCart,
  setSelectedCartProduct,
  clearCart,
} = cartSlice.actions;

export const persistMiddleware: Middleware<object, { cart: CartState }> =
  (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState().cart;
    saveStateToLocalStorage(state);
    return result;
  };

export default cartSlice.reducer;
