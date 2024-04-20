import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name:'library',
    initialState:{
        // libraryBooks:[],
        userTrack:[],
    },
    reducers:
    {
        addTrack:(state,action)=>{
            state.userTrack = action.payload
            // serializableCheck: false
        },
//         addUserBooks:(state,action)=>{
//             // console.log('dekho',action.payload)
//             state.userBooks = action.payload
//             // serializableCheck: false
//         },
//         addBooksToStore : (state,action)=>{
// state.storeBooks = action.payload
//         }
    }
})


export const { addTrack} = trackSlice.actions

export default trackSlice.reducer