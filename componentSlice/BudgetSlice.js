import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
   data:null,
    loading: false,
}

export const getAPIData = createAsyncThunk("api", async (dt) => {

        const response = await axios.post("http://192.168.0.103:3000/Budget",dt);
       console.log(response.data)

});

export const deleteData = createAsyncThunk("api", async (id) => {
    const response = await axios.delete(`http://192.168.0.103:3000/Budget/${id}`);
});


const BudgetSlice = createSlice({
    name: 'BudgetSlice',
    initialState,
    reducers: {},
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

export default BudgetSlice.reducer;
