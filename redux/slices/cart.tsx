import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ICartItemType {
  id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
  total: number;
}

let initialState: {
  items: ICartItemType[];
  total: number;
} = {
  items: [],
  total: 0,
};

export const initCart = createAsyncThunk(
  'cart.initCart',
  async (cache: any) => cache
);

export const AddToCart = createAsyncThunk(
  'cart.AddToCart',
  async (item: Omit<ICartItemType, 'total'>, thunkAPI) => {
    return { item };
  }
);

export const DeleteFromCart = createAsyncThunk(
  'cart.DeleteFromCart',
  async (item: Omit<ICartItemType, 'total'>, thunkAPI) => {
    return { item };
  }
)

export const EmptyCart = createAsyncThunk(
  'cart.EmptyFromCart',
  async () => {
    return  {};
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddToCart.fulfilled, (state, action) => {
      const exists = state.items.filter(
        (item: ICartItemType) => item.id === action.payload.item.id
      );
      if (exists.length < 1) {
        state.items = [
          ...state.items,
          {
            ...action.payload?.item,
            total: action.payload?.item.price * action.payload?.item.quantity,
          },
        ];
      } else {
        
        const newQuantity = exists[0].quantity + action.payload?.item.quantity;
        const newItem = {
          ...exists[0],
          ...{
            quantity: newQuantity,
            total: newQuantity * exists[0].price,
          },
        };
        
        state.items = [
          ...state.items.map((item: ICartItemType) =>
            item.id === newItem.id ? newItem : item
          ),

        ];
        
      }
      state.total = state.items.reduce(
        (acc: number, value: ICartItemType) => (acc += value.total),
        0
      );

      localStorage.setItem('cart', JSON.stringify(state));
    }),

    // init cart
    builder.addCase(initCart.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.total = action.payload.total;
    });

    // delete cart
    builder.addCase(DeleteFromCart.fulfilled, (state, action) => {
      state.items = [...state.items.filter(
        (item: ICartItemType) => item.id != action.payload.item.id
      )]
    })

    // empty cart
    builder.addCase(EmptyCart.fulfilled, (state) => {
      state.items = []
    })
  },
  
});

export const cartReducer = cartSlice.reducer;
