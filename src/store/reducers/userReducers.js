import { createReducer } from "@reduxjs/toolkit";
import { user_photo } from "../actions/userAction";

const initialState = {
    photo: 'http://messi.com'
}

export const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
)
