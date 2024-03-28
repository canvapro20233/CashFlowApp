import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Transaction from '../APIs/Transaction'
import axios from 'axios'

const initialState={
    allTransaction : null
}

export const getAPIData=createAsyncThunk("API calling",async()=>{
    const response= await Transaction()
    return response.data
})

const TransactionHomeSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
        filterWithTime:(state,action)=>{
            const date=new Date();
            const year=JSON.stringify(date).slice(1,5)
            const Month=JSON.stringify(date).slice(6,8)
            const dt=JSON.stringify(date).slice(9,11)
            const d=state.allTransaction
            const data=d.filter((a)=>{
                if(action.payload=="Today"){
                    if(a.createdAt.slice(8,10)==dt && a.createdAt.slice(5,7)==Month && a.createdAt.slice(0,4)==year){
                        console.log(a,'===');
                        return a
                    }
                }
                if(action.payload=="Week"){     
                    if((dt-7<=a.createdAt.slice(8,10) && a.createdAt.slice(8,10)<=dt)   && a.createdAt.slice(5,7)==Month && a.createdAt.slice(0,4)==year){
                        return a
                    }
                }
                if(action.payload=="Month"){
                    if(a.createdAt.slice(5,7)==Month && a.createdAt.slice(0,4)==year){
                        return a
                    }
                }
                if(action.payload=="Year"){
                    if(a.createdAt.slice(0,4)==year){
                        return a
                    }
                }
            })
            state.allTransaction=data
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAPIData.fulfilled,(state,action)=>{
            state.allTransaction=action.payload
        }).addCase(getAPIData.rejected,(state)=>{
            state.allTransaction="right now not have any"
        })
    }
})

export const {filterWithTime}=TransactionHomeSlice.actions
export default TransactionHomeSlice.reducer
