import { combineReducers } from "redux";
import { favoritesSlice } from "../slices/favoriteSlice";
import { cartSlice } from "../slices/cartSlice";

export const rootReducer = combineReducers({
  favorite: favoritesSlice.reducer,
  cart: cartSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
