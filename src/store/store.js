import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers"
import { cityReducer } from "./reducers/cityReducers";
import { itineraryReducer } from "./reducers/iteneraryReducers";


export const store = configureStore({
    reducer: {
        cityReducer,
        userReducer,
        itineraryReducer
    }
})