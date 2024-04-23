import { combineReducers } from 'redux';
import favoritesSlice from '../slices/favoritesSlice';
import busketSlice from '../slices/busketSlice';
import productsSlice from '../slices/productsSlice';

export const rootReducer = combineReducers({
  products: productsSlice,
  favorites: favoritesSlice,
  busket: busketSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
