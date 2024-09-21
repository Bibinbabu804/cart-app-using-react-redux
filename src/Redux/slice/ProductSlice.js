import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk("allProduct/fetchProductData",async()=>{
    const response= await axios.get("https://dummyjson.com/products")
    localStorage.setItem('products',JSON.stringify(response.data.products))

    return response.data.products
})

const productSlice=createSlice({
    name: "allProduct",
    initialState:{
        products:[],
        loading:false,
        error:''

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductData.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProductData.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        builder.addCase(fetchProductData.rejected,(state)=>{
            state.loading=false
            state.products=[]
            state.error='Failed to fetch products'
        })

    }
    
})

export default productSlice.reducer