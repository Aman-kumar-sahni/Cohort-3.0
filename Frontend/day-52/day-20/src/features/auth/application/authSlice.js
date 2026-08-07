import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
name:"auth",
initialState:{
    user:null,
    isAuthenticated:false
},
reducers:{

    addUser:(state,action)=>{
        state.user=action.payload
        state.isAuthenticated=true
    },
    deleteUser:(state)=>{
        state.user=null;
        state.isAuthenticated=false
    }
    
}
})
export const {addUser,deleteUser}=authSlice.actions;
export default authSlice.reducers