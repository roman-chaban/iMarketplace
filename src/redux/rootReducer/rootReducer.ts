import { combineReducers } from "redux";
import { favoritesSlice } from "../slices/favoriteSlice";
import { cartSlice } from "../slices/cartSlice";
import accessoriesSlice from "../slices/accessoriesSlice";

export const rootReducer = combineReducers({
  favorite: favoritesSlice.reducer,
  cart: cartSlice.reducer,
  accessories: accessoriesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
