import { configureStore } from "@reduxjs/toolkit";
import BillReducer from "./componentSlice/BillSplitterSlice"
import TransactionReducer from "./componentSlice/TransactionHomeSlice"
import TransactionFilterReducer from "./componentSlice/TransactionFilter";
import addExpenseSliceReducer from "./componentSlice/addExpenseSlice"
import addIncomeSliceReducer from "./componentSlice/addIncomeSlice";
import EditeSliceReducer from "./componentSlice/EditSlice"
const store=configureStore({
    reducer:{
        BillSplitter : BillReducer,
        Transaction : TransactionReducer,
        transactionFilter : TransactionFilterReducer,
        AddExpenseSlice : addExpenseSliceReducer,
        AddIncomeSlice : addIncomeSliceReducer,
        EditSlice : EditeSliceReducer
    }
})
export default store