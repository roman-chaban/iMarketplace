import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Accessories } from "../../interfaces/accessories";

export interface AccessoriesState {
  favorites: Accessories[];
  selectedProduct: Accessories[];
  favoriteCounter: number;
  cartCounter: number;
}

const loadStateFromLocalStorage = (): AccessoriesState => {
  try {
    const serializedState = localStorage.getItem("accessoriesState");
    if (serializedState !== null) {
      return JSON.parse(serializedState) as AccessoriesState;
    }
  } catch (error) {
    console.error("Error loading state from local storage:", error);
  }
  return {
    favorites: [],
    selectedProduct: [],
    favoriteCounter: 0,
    cartCounter: 0,
  };
};

const initialState: AccessoriesState = loadStateFromLocalStorage();

const accessoriesSlice = createSlice({
  name: "accessories",
  initialState,
  reducers: {
    addToFavoritesAccessories: (state, action: PayloadAction<Accessories>) => {
      const exists = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        state.favoriteCounter++;
      }
    },
    deleteFromFavoritesAccessories: (state, action: PayloadAction<string>) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.id === action.payload
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
        state.favoriteCounter = Math.max(0, state.favoriteCounter - 1);
      }
    },
    setSelectedProduct: (state, action: PayloadAction<Accessories[]>) => {
      state.selectedProduct = action.payload;
    },
    addAccessoriesToCart: (state, action: PayloadAction<Accessories>) => {
      const exists = state.favorites.some(
        (product) => product.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        state.cartCounter++;
      }
    },
    deleteAccessoriesFromCart: (state, action: PayloadAction<string>) => {
      const index = state.favorites.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.favorites.splice(index, 1);
        state.cartCounter = Math.max(0, state.cartCounter - 1);
      }
    },
  },
});

export const {
  addToFavoritesAccessories,
  deleteFromFavoritesAccessories,
  addAccessoriesToCart,
  deleteAccessoriesFromCart,
  setSelectedProduct,
} = accessoriesSlice.actions;

export default accessoriesSlice;
