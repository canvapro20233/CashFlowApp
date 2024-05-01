import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: null,
    loading: false,
}

export const APIData = createAsyncThunk("ap", async () => {
        const response = await axios.get("http://172.20.10.6:3000/Budget");
        return response.data;
});





const Slice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(APIData.pending, (state) => {
                state.loading = true;
            })
            .addCase(APIData.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload; 
            })
            .addCase(APIData.rejected, (state, action) => {
                state.loading = false;
            })

    },
});

export default Slice.reducer;
