import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name : "bag",
    initialState:["002"] ,
    reducers:{
        addToBag : (state,action )=>{
            state.push(action.payload);
        },
        removeFromBag : (state,action )=>{
           return state.filter(itemId => itemId != action.payload);
        }
    }
})

export const bagAction = bagSlice.actions;

export default bagSlice; 