import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from '../interfaces/products';
import { Tablet } from '../../interfaces/tablets';

export interface ProductsState {
  favorites: Products[];
  favoritesTablets: Tablet[];
  selectedProduct: Products[];
  favoriteCounter: number;
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
    favorites: [],
    favoritesTablets: [],
    selectedProduct: [],
    favoriteCounter: 0,
  };
};

const initialState: ProductsState = loadStateFromLocalStorage();
export const favoritesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
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

    deleteFromFavorites: (state, action: PayloadAction<number>) => {
      const deletedFavorite = state.favorites.find(
        (favorite) => favorite.phoneId === action.payload
      );
      if (deletedFavorite) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.phoneId !== action.payload
        );
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
      }
    },
    deleteFromFavoriteTablets: (state, action: PayloadAction<string>) => {
      const deletedTablet = state.favoritesTablets.find(
        (tablet) => tablet.id === action.payload
      );
      if (deletedTablet) {
        state.favoritesTablets = state.favoritesTablets.filter(
          (tablet) => tablet.id !== action.payload
        );
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
      }
    },

    setSelectedProduct: (state, action: PayloadAction<Products[]>) => {
      state.selectedProduct = action.payload;
    },
  },
});
export const {
  addToFavorites,
  addToFavoritesTablets,
  deleteFromFavorites,
  deleteFromFavoriteTablets,
  setSelectedProduct,
} = favoritesSlice.actions;
