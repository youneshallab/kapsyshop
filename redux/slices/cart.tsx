import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ICartItemType {
  id: string;
  quantity: number;
  title: string;
  price: number;
}

const initialState: {
  items: ICartItemType[];
} = {
  items: [],
};

export const AddToCart = createAsyncThunk(
  'cart.AddToCart',
  async (item: ICartItemType, thunkAPI) => {
    return {
      item,
    };
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddToCart.fulfilled, (state, action) => {
      const exists = state.items.filter(
        (item) => item.id === action.payload.item.id
      );

      if (!exists) {
        state.items.push(action.payload.item);
        return;
      }

      const newQuantity = exists[0].quantity++;
      const newItem = {
        ...exists[0],
        quantity: newQuantity,
        price: exists[0].price + action.payload.item.price,
      };

      state.items.map((item) => (item.id === newItem.id ? newItem : item));
      return;
    });
  },
});

export const cartReducer = cartSlice.reducer;
