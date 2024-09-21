import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: []
  },
  reducers: {
    addtowishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removefromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id != action.payload);
    }
  }
});

export const { addtowishlist, removefromWishlist } = wishlistslice.actions;
export default wishlistslice.reducer;
