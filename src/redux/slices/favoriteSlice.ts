import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../interfaces/products";
import { Tablet } from "../../interfaces/tablets";
import { Accessories } from "../../interfaces/accessories";

export interface ProductsState {
  favorites: Products[];
  favoritesTablets: Tablet[];
  favoritesAccessories: Accessories[];
  selectedProduct: Products[];
  favoriteCounter: number;
  cartCounter: number;
}

const loadStateFromLocalStorage = (): ProductsState => {
  try {
    const serializedState = localStorage.getItem("favoritesState");
    if (serializedState !== null) {
      return JSON.parse(serializedState) as ProductsState;
    }
  } catch (error) {
    console.error("Error loading state from local storage:", error);
  }
  return {
    favorites: [],
    favoritesTablets: [],
    favoritesAccessories: [],
    selectedProduct: [],
    favoriteCounter: 0,
    cartCounter: 0,
  };
};

const saveStateToLocalStorage = (state: ProductsState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favoritesState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

const initialState: ProductsState = loadStateFromLocalStorage();

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Products>) => {
      const exists = state.favorites.some(
        (favorite) => favorite.phoneId === action.payload.phoneId
      );
      if (!exists) {
        state.favorites.push(action.payload);
        state.favoriteCounter++;
        saveStateToLocalStorage(state);
      }
    },
    addToFavoritesTablets: (state, action: PayloadAction<Tablet>) => {
      const exists = state.favoritesTablets.some(
        (favorite) => favorite.tabletId === action.payload.tabletId
      );
      if (!exists) {
        state.favoritesTablets.push(action.payload);
        state.favoriteCounter++;
        saveStateToLocalStorage(state);
      }
    },
    deleteFromFavorites: (state, action: PayloadAction<number>) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.phoneId === action.payload
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
        saveStateToLocalStorage(state);
      }
    },
    deleteFromFavoriteTablets: (state, action: PayloadAction<number>) => {
      const index = state.favoritesTablets.findIndex(
        (tablet) => tablet.tabletId === action.payload
      );
      if (index !== -1) {
        state.favoritesTablets.splice(index, 1);
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
        saveStateToLocalStorage(state);
      }
    },
    addToFavoritesAccessories: (state, action: PayloadAction<Accessories>) => {
      if (!state.favoritesAccessories) {
        state.favoritesAccessories = [];
      }

      const exists = state.favoritesAccessories.some(
        (favorite) => favorite.id === action.payload.id
      );

      if (!exists) {
        state.favoritesAccessories.push(action.payload);
        state.favoriteCounter++;
        saveStateToLocalStorage(state);
      }
    },
    deleteFromFavoriteAccessories: (state, action: PayloadAction<string>) => {
      const index = state.favoritesAccessories.findIndex(
        (favorite) => favorite.id === action.payload
      );
      if (index !== -1) {
        state.favoritesAccessories.splice(index, 1);
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
        saveStateToLocalStorage(state);
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
  addToFavoritesAccessories,
  deleteFromFavoriteAccessories,
  setSelectedProduct,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
