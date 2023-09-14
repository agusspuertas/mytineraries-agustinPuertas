import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_login} from "../actions/userAction";

const initialState = {
    user: null,
    token: null
}

export const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
        .addCase(user_login.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
)
