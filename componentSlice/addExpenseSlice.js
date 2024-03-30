import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading :false,
    data : null
}

export const deleteApiData=createAsyncThunk("expense ",async(id)=>{
    
    const response=await axios.delete(`http://192.168.0.103:3000/Transaction/${id}`)
        return response.data
})


export const getApiData=createAsyncThunk("call api",async(obj)=>{

    const response=await axios.post("http://192.168.0.103:3000/Transaction",obj)
        return response.data
})

const AddExpenseSlice=createSlice({
    name:"AddExpenseSlice",
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
            console.log("rejected due to errors !!!");
        })
    }

})


export default AddExpenseSlice.reducer