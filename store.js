import { configureStore } from "@reduxjs/toolkit";
import BillReducer from "./componentSlice/BillSplitterSlice"
const store=configureStore({
    reducer:{
        BillSplitter : BillReducer
    }
})

export default store