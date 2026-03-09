import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../types';

interface Order {
  id: string;
  items: Product[];
  total: number;
  createdAt: string;
}

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      // state.orders = [];
      state.orders = [action.payload, ...state.orders];
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
