import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { EditAPI } from "./api";

const initialState={
    data:null,
    loading:false,

}
export const editData = createAsyncThunk("ap", async (dt) => {
    console.log(dt,'=======dt');
    const response = await EditAPI(dt);
});


const EditSlice = createSlice({
    name: 'EditSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(editData.pending, (state) => {
                state.loading = true;
            })
            .addCase(editData.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(editData.rejected, (state, action) => {
                state.loading = false;
            });
    },
});


export default EditSlice.reducer;