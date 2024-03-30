import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading :false,
    data : null,
    dt: null
}


export const getApiData=createAsyncThunk("call ap",async()=>{

    const response=await axios.get("http://192.168.0.103:3000/Transaction")
        return response.data
})

const EditSlice=createSlice({
    name:"EditSlice",
    initialState,
    reducers:{
        findData:(state,action)=>{
            const dt=state.data.find((a)=> a.id==action.payload)
            state.dt=dt
        }
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

export const {findData}=EditSlice.actions
export default EditSlice.reducer