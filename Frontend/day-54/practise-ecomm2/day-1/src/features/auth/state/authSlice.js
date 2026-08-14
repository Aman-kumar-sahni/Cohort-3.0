import { createSlice } from "@reduxjs/toolkit";

 const authSLice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:true,
        
    },
    reducers:{
        addUser:(state,action)=>{
            state.user= action.payload;
state.isAuthenticated=true;
state.isLoading=false;
        },
        removeUser:(state)=>{

state.user=null,
state.isAuthenticated=false
        }
    }
})

export const {addUser,removeUser}= authSLice.actions;
export default authSLice.reducer;
