import { createSlice } from "@reduxjs/toolkit";


const initialState={
    amount : 0,
    tipPer : 0,
    tipamount : 0,
    people : 0,
    totalTipAmount : 0,
    Total : 0,
    Each : 0
}
const BillSplitter=createSlice({
    name:'BillSplitter',
    initialState,
    reducers:{
        amount:(state,action)=>{
            state.amount=action.payload
        },
        tipPer:(state,action)=>{
            state.tipPer=action.payload
        },
        tipamount:(state,action)=>{
            state.tipamount=action.payload
        },
        people:(state,action)=>{
            state.people=action.payload
        },
        GenerateBill : (state)=>{
            if(state.tipPer>0){
                let tipPlus=state.amount * (state.tipPer/100)
                state.tipamount=tipPlus
            }
            state.totalTipAmount=state.tipamount
            state.Total=parseInt(state.amount)+parseInt(state.totalTipAmount)
            state.Each=state.Total/state.people
        }
    }
})

export const {amount,tipPer,tipamount,people,GenerateBill}=BillSplitter.actions
export default BillSplitter.reducer

