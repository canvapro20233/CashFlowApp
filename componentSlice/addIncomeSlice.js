import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading :false,
    data : null
}

export const getApiData=createAsyncThunk("call api",async(obj)=>{

    const response=await axios.post("http://192.168.0.103:3000/Transaction",obj)
        return response.data
})

const AddIncomeSlice=createSlice({
    name:"AddIncomeSlice",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getApiData.pending,(state)=>{
            state.loading=true
        }).addCase(getApiData.fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
        }).addCase(getApiData.rejected,(state)=>{
            state.loading=false
            console.log("rejected due to errors !");
        })
    }

})

export default AddIncomeSlice.reducer