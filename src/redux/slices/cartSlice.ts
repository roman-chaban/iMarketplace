import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../interfaces/products';
import { Tablet } from '../../interfaces/tablets';

export interface CartState {
  cart: Products[];
  cartCounter: number;
  selectedProduct: Products[];
  basketTablets: Tablet[];
}

const loadStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem('productsState');
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error('Error loading state from local storage:', error);
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
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const existingFavorite = state.cart.find(
        (favorite) => favorite.phoneId === action.payload.phoneId
      );
      if (!existingFavorite) {
        state.cart = [...state.cart, action.payload];
        state.cartCounter++;
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const deletedItem = state.cart.find(
        (item) => item.phoneId === action.payload
      );
      if (deletedItem) {
        state.cart = state.cart.filter(
          (item) => item.phoneId !== action.payload
        );
        state.cartCounter = Math.max(0, state.cartCounter - 1);
      }
    },
    deleteBasketTablets: (state, action: PayloadAction<string>) => {
      const deletedTablet = state.basketTablets.find(
        (tablet) => tablet.id === action.payload
      );
      if (deletedTablet) {
        state.basketTablets = state.basketTablets.filter(
          (tablet) => tablet.id !== action.payload
        );
        state.cartCounter = Math.max(0, state.cartCounter - 1);
      }
    },
    addBasketTablets: (state, action: PayloadAction<Tablet>) => {
      const existingFavorite = state.basketTablets.find(
        (basket) => basket.id === action.payload.id
      );
      if (!existingFavorite) {
        state.basketTablets = [...state.basketTablets, action.payload];
        state.cartCounter++;
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
  setSelectedCartProduct,
  addBasketTablets,
  deleteBasketTablets,
} = cartSlice.actions;
