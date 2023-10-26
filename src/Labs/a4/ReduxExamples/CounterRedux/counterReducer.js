import {createSlice} from "@reduxjs/toolkit";
import counter from "../../Counter";

const initialState = {
    count:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.count = state.count + 1;
        },
        decrement:(state)=>{
            state.count = state.count - 1;
        }
    }
})

export const {increment, decrement} =
    counterSlice.actions;

export default counterSlice.reducer;