import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
// import libraryReducer from "./librarySlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        // library:libraryReducer
    }
})

export default appStore