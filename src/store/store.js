import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "./reducers/cityReducers";
import { itineraryReducer } from "./reducers/iteneraryReducers";

export const store = configureStore({
    reducer: {
        cityReducer,
        itineraryReducer
    }
})