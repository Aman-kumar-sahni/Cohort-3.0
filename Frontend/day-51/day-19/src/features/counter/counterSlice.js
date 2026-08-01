import { createSlice } from '@reduxjs/toolkit'

const counterSlice=createSlice({

    name :"counter",
    initialState:{
        count:0
    },
    reducers:{
     increment :(state)=>{
state.count++
     },
     
        decrement:(state)=>{
            state.count--
        },
       increaseByAmount(state,actions){
        state.count+=actions.payload

     }

    }
})
export const {increaseByAmount,increment,decrement}=counterSlice.actions
export default counterSlice.reducer