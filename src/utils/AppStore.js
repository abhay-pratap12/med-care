import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
// import libraryReducer from "./librarySlice";
import trackReducer from "./trackSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        userTrack:trackReducer,
    }
})

export default appStore