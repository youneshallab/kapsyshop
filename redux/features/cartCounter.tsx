import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { constants } from 'buffer';
import { useState } from 'react';

var cartItemsCount = 0
/*
if (typeof window !== 'undefined') {
  const existingCart = localStorage.getItem('cart');
  const cartItems = existingCart ? JSON.parse(existingCart) : [];
  cartItemsCount = cartItems.length
}
*/
export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: cartItemsCount,
}

export const cartCounter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    initToZero: (state) => {
      state.value = 0
    },
    assignValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, initToZero, assignValue } = cartCounter.actions

export default cartCounter.reducer