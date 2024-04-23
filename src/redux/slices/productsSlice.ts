import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Products } from '../interfaces/products';
import { getProducts } from '../../common/api/getProducts';

const initialState: Products[] = [];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const products = await getProducts();
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products/setProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});


export default productsSlice.reducer;