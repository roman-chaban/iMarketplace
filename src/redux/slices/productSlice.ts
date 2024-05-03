import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer/rootReducer';
import { Products } from '../interfaces/products';
import { Tablet } from '../../interfaces/tablets';

interface ProductsState {
  cart: Products[];
  favorites: Products[];
  favoritesTablets: Tablet[];
  selectedProduct: Products[];
  favoriteCounter: number;
  basketCounter: number;
}

const loadStateFromLocalStorage = (): ProductsState => {
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
    favorites: [],
    favoritesTablets: [],
    selectedProduct: [],
    favoriteCounter: 0,
    basketCounter: 0,
  };
};

const initialState: ProductsState = loadStateFromLocalStorage();

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.cart.find(
        (item) => item.phoneId === action.payload.phoneId
      );
      if (!existingProduct) {
        state.cart = [...state.cart, action.payload];
        state.basketCounter++;
      }
    },
    addToFavorites: (state, action: PayloadAction<Products>) => {
      const existingFavorite = state.favorites.find(
        (favorite) => favorite.phoneId === action.payload.phoneId
      );
      if (!existingFavorite) {
        state.favorites = [...state.favorites, action.payload];
        state.favoriteCounter++;
      }
    },
    addToFavoritesTablets: (state, action: PayloadAction<Tablet>) => {
      const existingFavorite = state.favoritesTablets.find(
        (favorite) => favorite.id === action.payload.id
      );
      if (!existingFavorite) {
        state.favoritesTablets = [...state.favoritesTablets, action.payload];
        state.favoriteCounter++;
      }
    },
    deleteFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (good) => good.phoneId !== action.payload
      );
      state.favoriteCounter--;
    },
    deleteFavoriteTablets: (state, action: PayloadAction<string>) => {
      state.favoritesTablets = state.favoritesTablets.filter(
        (tablet) => tablet.id !== action.payload
      );
      state.favoriteCounter--;
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.phoneId !== action.payload);
      state.basketCounter--;
    },
    setSelectedProduct: (state, action: PayloadAction<Products[]>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorites,
  addToFavoritesTablets,
  deleteFavorites,
  deleteFavoriteTablets,
  deleteFromCart,
  setSelectedProduct,
} = productSlice.actions;

export const selectProductsState = (state: RootState) => state.productSlice;
