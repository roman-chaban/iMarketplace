import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../interfaces/products';

interface ProductsState {
  cart: Products[];
  favorites: Products[];
  selectedProduct: Products[];
  favoriteCounter: number;
  basketCounter: number;
}

const initialState: ProductsState = {
  cart: [],
  favorites: [],
  selectedProduct: [],
  favoriteCounter: 0,
  basketCounter: 0,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      state.cart.push(action.payload);
      state.basketCounter++;
    },
    addToFavorites: (state, action: PayloadAction<Products>) => {
      const existingFavorite = state.favorites.find(
        (favorite) => favorite.phoneId === action.payload.phoneId
      );
      if (!existingFavorite) {
        state.favorites.push(action.payload);
        state.favoriteCounter++;
      }
    },
    deleteFavorites: (state, action: PayloadAction<number>) => {
      const index = state.favorites.findIndex(
        (good) => good.phoneId === action.payload
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
        state.favoriteCounter = state.favorites.length; 
      }
    
      if (state.favorites.length === 0) {
        state.favoriteCounter = 0; 
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (item) => item.phoneId === action.payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
        state.basketCounter--;
      }
    },
    selectedProduct: (state, action: PayloadAction<Products[]>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorites,
  selectedProduct,
  deleteFavorites,
  deleteFromCart,
} = productSlice.actions;

export default productSlice.reducer;
