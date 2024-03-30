import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, resetpass } from "./API";

const initialState = {
  loading: false,
  userdata: null,
  finduser:null
};

export const forgetuser = createAsyncThunk("forget/forgetuser", async () => {
    const response = await loginAPI()
    return response.data;     
});

export const newpassword = createAsyncThunk("newpass",async(data) => {
  const respons = await resetpass(data)
  return respons
} )

const forgetslice = createSlice({
  name: 'forget',
  initialState,
  reducers: {
    forgetPass:(state,action)=>{
      const email = action.payload.email
      const find = state.userdata.find((e)=>{
        if(e.email == email){
          return e
        }
      })
      state.finduser = find
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgetuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetuser.fulfilled, (state, action) => {
        state.loading = false;
        state.userdata = action.payload
      })
      .addCase(forgetuser.rejected, (state) => {
        state.loading = false;
        state.userdata = null
      });
  },
});

export const { clearError, forgetPass} = forgetslice.actions;

export default forgetslice.reducer;
