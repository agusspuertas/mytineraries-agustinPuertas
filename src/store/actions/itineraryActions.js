import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItineraries = createAsyncThunk('getItineraries', async(id)=>{
    try{
        const response = await axios.get(`http://localhost:7000/api/itineraries/city/${id}`)
        return{
            itineraries: response.data
        }
 
    }catch(error){
        console.log(error)
        return {
            itineraries:[]
        }
    }
})