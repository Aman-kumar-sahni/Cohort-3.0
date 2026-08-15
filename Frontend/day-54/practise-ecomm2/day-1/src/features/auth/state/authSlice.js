import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authActions";

 const authSLice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false,
        
    },

    extraReducers:(builder)=>{
        builder
        .addCase(loginUserAction.pending,(state,action)=>{
state.isLoading=true;
        })
        .addCase(loginUserAction.fulfilled,(state,action)=>{
state.isLoading=false;
state.isAuthenticated=true;
state.user=action.payload
        })
        .addCase(loginUserAction.rejected,(state,action)=>{
            state.isLoading=false;

        })
        .addCase(hydrateUserAction.pending,(state,action)=>{
state.isLoading=true

        }
    )
    .addCase(hydrateUserAction.fulfilled,(state,action)=>{
        state.user=action.payload

state.isAuthenticated=true;
state.isLoading=false;
    })
    .addCase(hydrateUserAction.rejected,(state,action)=>{
        state.isLoading=false

    })


    }
})

export const {addUser,removeUser}= authSLice.actions;
export default authSLice.reducer;
