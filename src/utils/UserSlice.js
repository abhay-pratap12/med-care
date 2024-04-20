import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'users',
    initialState:{
        userName:null,
        // profilePic:[],
        userId: null
        // userName:null,
        // photoUrl:null,
        // instaId:null
    },
    reducers:{
        addUserName: (state,action )=>{
          state.userName = action.payload
        },
        // addProfilePic: (state,action) =>{
        //     state.profilePic = action.payload
        // },
        adduserId: (state,action) =>{
            state.userId = action.payload
        }
    }

})

export const { addUserName, adduserId } = UserSlice.actions

export default UserSlice.reducer