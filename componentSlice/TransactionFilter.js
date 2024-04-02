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

const TransactionFilter = createSlice({
    name:"transactionFilter",
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
        incomeExpense:(state,action)=>{
            console.log(action.payload,'====income and expense');
            if(action.payload=="Income" || action.payload=="Expense"){
                console.log('in income and expense');
                const data=state.allTransaction.filter((a)=> a.type==action.payload)
                state.allTransaction=data
            }
            
        },
        sortData:(state,action)=>{
            console.log(action.payload,'=========sort');
            if(action.payload!=0){
                console.log('in sort');
            if(action.payload=="Highest"){
                const dat=state.allTransaction.reduce((a,b)=>Number(a.money)>Number(b.money) ? a : b)
                state.allTransaction=[dat]
            }
            if(action.payload=="Lowest"){
                const dat=state.allTransaction.reduce((a,b)=>Number(a.money)<Number(b.money) ? a : b)
                state.allTransaction=[dat]
            }
            if(action.payload=="Newest"){
                console.log(state.allTransaction)
                let date=[]
                 date=state.allTransaction.map((a)=>{
                    return new Date(a.createdAt)
                })
                const neww=new Date(Math.max(...date))
                const data=state.allTransaction.find((a)=>{
                    if(JSON.stringify(a.createdAt)==JSON.stringify(neww))
                    {
                        return a
                    }
                })
                state.allTransaction=[data]
            }
            if(action.payload=="Oldest"){
                let date=[]
                console.log(state.allTransaction);
                 date=state.allTransaction.map((a)=>{
                    return new Date(a.createdAt)
                })
                const neww=new Date(Math.min(...date))
                const data=state.allTransaction.find((a)=>{
                    if(JSON.stringify(a.createdAt)==JSON.stringify(neww))
                    {
                        return a
                    }
                })
                console.log(data);
                state.allTransaction=[data]
            }}
        },
        sortByCate:(state,action)=>{
            console.log(action.payload,'=====cate');

            if(action.payload.v!=null){
                console.log('in cate');
            const v=action.payload
            const data=state.allTransaction.filter((a)=>{
                if(a.category==v.v)
                {
                    return a
                }
            })
            state.allTransaction=data
        }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAPIData.fulfilled,(state,action)=>{
            state.allTransaction=action.payload
        }).addCase(getAPIData.rejected,(state)=>{
            state.allTransaction="right now not have any"
        })
    }
})

export const {filterWithTime,incomeExpense,sortData,sortByCate}=TransactionFilter.actions
export default TransactionFilter.reducer
