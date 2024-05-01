import { configureStore } from "@reduxjs/toolkit";
import BillReducer from "./componentSlice/BillSplitterSlice"
import TransactionReducer from "./componentSlice/TransactionHomeSlice"
import TransactionFilterReducer from "./componentSlice/TransactionFilter";
import EditeSliceReducer from "./componentSlice/EditSlice"
import loginReducer from './componentSlice/loginslice';
import forgetsliceReducer from "./componentSlice/forgetslice";
import newAccountReducer from "./componentSlice/newAccountSlice";
import sliceReducer from "./componentSlice/slice";
import BudgetSlice from "./componentSlice/BudgetSlice";
const store=configureStore({
    reducer:{
        BillSplitter : BillReducer,
        Transaction : TransactionReducer,
        transactionFilter : TransactionFilterReducer,
        EditSlice : EditeSliceReducer,
        login: loginReducer,
        forget : forgetsliceReducer,
        NewAccountSlice : newAccountReducer,
        Slice : sliceReducer,
        BudgetSlice : BudgetSlice
    }
})
export default store