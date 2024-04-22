import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Favorites } from '../interfaces/favorite';

const initialState: Favorites = { favoriteCount: 0 };

const favoritesSlice = createSlice({
  name: 'Favorites/FavoritesCounter',
  initialState,
  reducers: {
    addFromCart: (state, action: PayloadAction<number>) => {
      state.favoriteCount += action.payload;
    },
    removerFromCart: (state, action: PayloadAction<number>) => {
      state.favoriteCount += action.payload;
    },
  },
});

export default favoritesSlice.reducer;
export const { addFromCart, removerFromCart } = favoritesSlice.actions;
