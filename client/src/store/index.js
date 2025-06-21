import { configureStore } from '@reduxjs/toolkit'; 
import authReducer from "./authSlice";
import milestoneReducer from "./milestoneSlice";

export const store = configureStore({
    reducer: { 
        auth: authReducer,
        milestone: milestoneReducer
    },
});