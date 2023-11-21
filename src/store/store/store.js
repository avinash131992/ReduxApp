import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../productSlice/ProductSlice";
import cartSlice from "../cartSlice/cartSlice";

export const store = configureStore(
    {
        reducer:{
          product: ProductSlice, 
          cart:cartSlice
        },
    }
)

export default store