import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../MovieSlice'
import userSlice from "../UserSlice";
import userReducer from '../UserSlice'
export const store = configureStore({
    reducer: {
        movie : movieReducer,
        user : userSlice
    }
})