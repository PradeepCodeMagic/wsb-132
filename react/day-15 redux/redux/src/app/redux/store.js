import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from "./features/counter/CounterSlice"

export const wsStore=configureStore({
    reducer:{
        WsCounter:counterSliceReducer,
      
    }
})