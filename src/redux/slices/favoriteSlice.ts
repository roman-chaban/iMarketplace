import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../interfaces/products";
import { Tablet } from "../../interfaces/tablets";

export interface ProductsState {
  favorites: Products[];
  favoritesTablets: Tablet[];
  selectedProduct: Products[];
  favoriteCounter: number;
}

const loadStateFromLocalStorage = (): ProductsState => {
  try {
    const serializedState = localStorage.getItem("productsState");
    if (serializedState !== null) {
      return JSON.parse(serializedState) as ProductsState;
    }
  } catch (error) {
    console.error("Error loading state from local storage:", error);
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
  name: "products",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Products>) => {
      const exists = state.favorites.some(
        (favorite) => favorite.phoneId === action.payload.phoneId
      );
      if (!exists) {
        state.favorites.push(action.payload);
        state.favoriteCounter++;
      }
    },
    addToFavoritesTablets: (state, action: PayloadAction<Tablet>) => {
      const exists = state.favoritesTablets.some(
        (favorite) => favorite.tabletId === action.payload.tabletId
      );
      if (!exists) {
        state.favoritesTablets.push(action.payload);
        state.favoriteCounter++;
      }
    },
    deleteFromFavorites: (state, action: PayloadAction<number>) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.phoneId === action.payload
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
      }
    },
    deleteFromFavoriteTablets: (state, action: PayloadAction<number>) => {
      const index = state.favoritesTablets.findIndex(
        (tablet) => tablet.tabletId === action.payload
      );
      if (index !== -1) {
        state.favoritesTablets.splice(index, 1);
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

export default favoritesSlice.reducer;
