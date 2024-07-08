import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  initialState: [],
  name: 'cartSlice',
  reducers: {
    add_product: (state, { payload }) => {
      const existingProductIndex = state.findIndex(item => item.id === payload.id);
    
      if (existingProductIndex !== -1) {
        state[existingProductIndex].amount += 1;
      } else {
        const newItem = { ...payload, amount: 1 };
        state.push(newItem);
      }
    },
    remove_product: (state, { payload }) => {
      return state.filter(prod => prod.id !== payload.id);
    },
    reset_cart: (state) => {
      return [];
    },
    decrease_amount: (state, { payload }) => {
      const existingProductIndex = state.findIndex(item => item.id === payload.id);
      if (existingProductIndex !== -1) {
        if (state[existingProductIndex].amount === 1) {
          return state.filter(prod => prod.id !== payload.id);
        } else {
          state[existingProductIndex].amount -= 1;
        }
      }
    },
  },
});

export const {add_product, reset_cart, remove_product, decrease_amount} = cartSlice.actions;
export default cartSlice.reducer;
