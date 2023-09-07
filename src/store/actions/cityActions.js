import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


 export const getCities = createAsyncThunk ('getCities',async()=>{
    try{
        const response = await axios.get(`http://localhost:7000/api/cities`) 
        return{
           cities: response.data.cities
        }
    }catch(error){
        console.log(error)
    }
})


export const getCity = createAsyncThunk ('getCity', async(obj)=>{
    try{
        const response = await axios.get(`http://localhost:7000/api/cities/${obj.id}`)
        return{
            city: response.data.city
         }
    }catch(error){
        return{city: []}
    }
})



export const searchCity = createAsyncThunk ('searchCity', async(obj)=> {
    try{
        const response = await axios.get(`http://localhost:7000/api/cities?nombre=${obj.nombre}`)
        return {
            cities: response.data.cities
        }
    }catch(error){
       return {city: []}
    }
})

