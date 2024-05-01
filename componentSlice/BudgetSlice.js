import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddBudget,UpdateBudget, DeleteBudget,GetBudget } from "../APIs/Transaction";

import axios from "axios";
const initialState = {
   data:null,
    loading: false,
}

export const getAPIData = createAsyncThunk("api", async (dt) => {

        const response = await AddBudget(dt)
});

export const UpdatedData = createAsyncThunk("update", async (dt) => {

    const response = await UpdateBudget(dt)
});

export const deleteData = createAsyncThunk("api", async (id) => {
    const response = await DeleteBudget(id)
});

export const getid = createAsyncThunk("id", async (obj) => {
    let a;
            if(obj.category=="Shopping"){
                a=1;
            }else if(obj.category=="Subscription"){
                a=2;
            }else if(obj.category=="Food"){
                a=3;
            }else if(obj.category=="Travel"){
                a=4;
            }else if(obj.category=="Hospital"){
                a=5;
            }else if(obj.category=="Loan"){
                a=6;
            }
    const response = await GetBudget(a)
    let res=response.data
    let r=Number(res.remaining)-Number(obj.money);
    res.remaining=r;
    await axios.put(`http://192.168.0.103:3000/Budget/${a}`,res);
});




const BudgetSlice = createSlice({
    name: 'BudgetSlice',
    initialState,
    reducers: {
        updateBudget : (state,action)=>{
            let a;
            if(action.payload.category=="Shopping"){
                a=1;
            }else if(action.payload.category=="Subscription"){
                a=2;
            }else if(action.payload.category=="Food"){
                a=3;
            }else if(action.payload.category=="Travel"){
                a=4;
            }else if(action.payload.category=="Hospital"){
                a=5;
            }else if(action.payload.category=="Loan"){
                a=6;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAPIData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAPIData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; 
            })
            .addCase(getAPIData.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const { updateBudget} = BudgetSlice.actions;
export default BudgetSlice.reducer;
