import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../APIs/Transaction";

const initialState = {
  loading: false,
  error: null,
  data: null,
  finduser: null
};

export const loginUser = createAsyncThunk("login", async () => {
    const response = await loginAPI()
    return response.data;
        
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userFind:(state,action)=>{
      const email = action.payload.email
      const password = action.payload.password

      const find = state.data.find((e)=>{
        if(e.email == email && e.password==password){
          return e
        }
      })

      state.finduser = find
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data=action.payload
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearError,userFind } = loginSlice.actions;

export default loginSlice.reducer;
