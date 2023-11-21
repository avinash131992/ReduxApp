import {createSlice} from '@reduxjs/toolkit'


export const productSlice = createSlice({
    name:'product',
    initialState: {data:[]},
    reducers:{
        add(state,action){
          state.data = action.payload
        },
    }
});


export const {add} = productSlice.actions
export default productSlice.reducer