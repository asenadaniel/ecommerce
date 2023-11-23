import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
    deleteCart: (state, action) => {
      state.productData = state.productData.filter(item => item._id !== action.payload)
    },
    resetCart: (state) => {
      state.productData = []
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
})

export const { addToCart, deleteCart, resetCart, increamentQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer;