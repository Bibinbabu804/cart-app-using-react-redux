import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import wishlistslice from "./slice/wishlistslice";
import cartSlice from "./slice/cartSlice";


const cartStore=configureStore({
    reducer: {
        ProductSlice,
        wishlistslice,
        cartSlice

    }
                
})
export default cartStore

