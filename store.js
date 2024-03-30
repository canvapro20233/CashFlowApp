import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice';
import loginReducer from './loginslice';
import forgetReducer from './forgetslice';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer,
        forget: forgetReducer,
    }
})

export default store;