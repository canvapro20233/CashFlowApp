import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addUserAPI } from "../APIs/Transaction";
const initialState={
    loading :false,
    data : null,
    dt: null
}

export const getApiData=createAsyncThunk("call ap",async()=>{

    const response=await axios.get("http://192.168.2.109:3000/Transaction")
        return response.data
})

export const editApiData=createAsyncThunk("edit api",async(obj)=>{

    const response=await axios.put(`http://192.168.2.109:3000/Transaction/${obj.id}`,obj)
        return response.data
})

export const deleteApiData=createAsyncThunk("delete api",async(id)=>{

    const response=await axios.delete(`http://192.168.2.109:3000/Transaction/${id}`)
        return response.data
})

export const addApiData=createAsyncThunk("add api",async(obj)=>{

    const response=await axios.post("http://192.168.2.109:3000/Transaction",obj)
        return response.data
})

export const useradd = createAsyncThunk("counter/useradd",async(data)=> {
    try{
        const response = await addUserAPI(data)
        console.log(response.data);
    }catch(error){
        console.log("error error");
    }
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