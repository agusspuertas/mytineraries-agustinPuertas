import { createReducer } from "@reduxjs/toolkit";
import { getItineraries} from '../actions/itineraryActions'

const initialState = {
    itineraries: []
}

export const itineraryReducer=createReducer(initialState,
    (builder)=>builder
        .addCase(getItineraries.fulfilled,(state, action)=>{
            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
)