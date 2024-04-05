import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const initialState={
    data:null,
    loading:false,

}
export const editData = createAsyncThunk("def", async (dt) => {
    return axios.delete(`http://192.168.0.103:3000/Budget/${dt.id}`,dt)
});


const EditSlice = createSlice({
    name: 'EditSli',
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