import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart") || "[]")
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      itemInCart ? (itemInCart.qty += 1) : state.data.push(action.payload);
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
