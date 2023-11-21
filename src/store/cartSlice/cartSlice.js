import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState:{data:[]},
    // initialState:[],
    reducers:{
        addtocart (state,action){
            // state.data = action.payload
            state.data.push(action.payload)
        },
        remove(state,action){
            state.data = state.data.filter((d)=>{
                return d.id !== action.payload
            })
        }
    }
})

export const {addtocart,remove} = cartSlice.actions
export default cartSlice.reducer
