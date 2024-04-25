import { combineReducers } from 'redux';
import productSlice from '../slices/productSlice';

export const rootReducer = combineReducers({
  productSlice: productSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
