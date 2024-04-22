import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Busket } from '../interfaces/busket';

const initialState: Busket = { busketCount: 0 };

const busketSlice = createSlice({
  name: 'Favorites/BusketCounter',
  initialState,
  reducers: {
    addBusketGoods: (state, action: PayloadAction<number>) => {
      state.busketCount += action.payload;
    },
    removeBusketGoods: (state, action: PayloadAction<number>) => {
      state.busketCount -= action.payload;
    },
  },
});

export default busketSlice.reducer;
export const { addBusketGoods, removeBusketGoods } = busketSlice.actions;
