import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BankApi } from "../APIs/Transaction";
import { addUserAPI } from "../APIs/Transaction";
const initialState={
    loading :false,
    data : null,
    obj : null,
    dt: null
}

export const newAccount=createAsyncThunk("call bank api",async()=>{
    const response=await BankApi()
        return response.data
})


const NewAccountSlice=createSlice({
    name:"NewAccountSlice",
    initialState,
    reducers:{
        FindData:(state,action)=>{
        const obj=action.payload
        state.data.find((a)=>{
            if(a.Bankname==obj.Bankname && a.Phonenumber==obj.Phonenumber && a.Accountnumber==obj.Accountnumber && a.IFSC==obj.IFSC){
                state.obj=a
            }
        })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(newAccount.pending,(state)=>{
            state.loading=true
        }).addCase(newAccount.fulfilled,(state,action)=>{
            state.data=action.payload
            state.loading=false
        }).addCase(newAccount.rejected,(state)=>{
            state.loading=false
            console.log("rejected due to errors !");
        })
    }

})

export const {FindData}=NewAccountSlice.actions
export default NewAccountSlice.reducer