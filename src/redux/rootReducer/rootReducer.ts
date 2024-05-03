import { combineReducers } from 'redux';
import {productSlice} from '../slices/productSlice';

export const rootReducer = combineReducers({
  productSlice: productSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
