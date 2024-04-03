import  { configureStore } from '@reduxjs/toolkit';
import apiReducer from './BudgetSlice'
import data from './slice'
import reducer from './EditSlice'

const Store = configureStore({
  reducer: {
    BudgetSlice: apiReducer,
    Slice:data,
    EditSlice:reducer,
  },
});

export default Store;
