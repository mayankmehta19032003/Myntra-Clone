import { createSlice } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
    name : "fetchStatus",
    initialState: {
        fetchDone : false,
    },
    reducers:{
        markFetchDone : (state)=>{
            return state.fetchDone = true;
        }, 

       
    }
})

export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice;