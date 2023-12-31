import { createReducer } from "@reduxjs/toolkit";
import { user_photo, user_login, user_logout, user_token, user_login_google} from "../actions/userAction";


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
        .addCase(user_logout.fulfilled, (state, action) => {
            return {
              ...state,
              user: null,
              token: null,
            }
          })
          .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user
            }
        })
        .addCase(user_login_google.fulfilled,(state,action)=>{
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })    

)
