import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";
import data from './dataMock.js'

const initialState = {
    allMovies: [],
    details:{}
  };

export const dataSlice = createSlice({
    name:'allData',
    initialState,
    reducers:{
        allMovies : (state, action)=>{
            state.allMovies = action.payload
        },
        DetailsMovies : (state,action)=>{
            state.details = action.payload
        },
        clearDetail : (state)=>{
            state.details = []
        }
    }
})

export const asyncallMovies = () => {
    return async function(dispatch){
        //let response = await axios.get(`http://localhost:3001/types`)
        return dispatch(allMovies(data))
    }
  }

  export const asyncgetDetails = (id) => {
    return async function(dispatch){
      //let response = await axios.get(`http://localhost:3001/home/:${id}`)
      let movieD = data.filter(e=>e.imdbID===id)
      return dispatch(DetailsMovies(movieD))
    }
  }

export const {allMovies,DetailsMovies,clearDetail} = dataSlice.actions

export default dataSlice.reducer