import { createReducer } from "@reduxjs/toolkit";
import { getCities, getCity, searchCity } from '../actions/cityActions'

const initialState = {
    cities: [],
    city: {}
}
export const cityReducer = createReducer(initialState,
     (builder) =>builder
    .addCase(getCities.fulfilled,(state,action) => {
        return {
            ...state,
            cities: action.payload.cities
        }
    })

    .addCase(getCity.fulfilled,(state,action) => {
        return {
            ...state,
            city: action.payload.city
        }
    })

    .addCase(searchCity.fulfilled,(state,action) => {
        return {
            ...state,
            cities: action.payload.cities
        }
    })
)

