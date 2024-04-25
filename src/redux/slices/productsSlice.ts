import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Products } from '../interfaces/products';
import { getProducts } from '../../common/api/getProducts';

interface ProductsProps {
  products: Products[];
  error: string | null;
  loading: boolean;
}
const ProductsState: ProductsProps = {
  products: [],
  error: null,
  loading: false,
};

const initialState = ProductsState;

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
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as unknown as string;
      });
  },
});

export default productsSlice.reducer;
