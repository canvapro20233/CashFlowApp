import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import { UserAPI, addUserAPI } from "./API";

const initialState = {
    value: 0,
    loading:false,
}
export const useradd = createAsyncThunk("counter/useradd",async(data)=> {
    try{
        const response = await addUserAPI(data)
        console.log(response.data);
    }catch(error){
        console.log("error error");
    }
})

const Slice = createSlice({
    name: 'counter',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(useradd.pending, (state) => {
                state.loading = true;
            })
            .addCase(useradd.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(useradd.rejected, (state, action) => {
                state.loading = false;
            })
    },
});

export default Slice.reducer;