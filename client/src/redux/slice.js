import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";
import {data,allgenre} from './dataMock.js'
import ordering from '../Funciones_js/Ordenamiento.js'

const initialState = {
    allMovies: [],
    copyAllMovies:[],
    genres : [],
    details:{}
  };

export const dataSlice = createSlice({
    name:'allData',
    initialState,
    reducers:{
        allMovies : (state, action)=>{
            state.allMovies = action.payload
            state.copyAllMovies = action.payload
        },

        allgenres :(state, action)=>{
          state.genres = action.payload
        },

        filterGenre :(state, action)=>{
          let auxMovies = state.copyAllMovies
          state.allMovies = action.payload === 'all'
          ? state.copyAllMovies
          : auxMovies.filter((e) => e.Genre?.includes(action.payload))
        },

        orderMovies : (state, action)=>{
          let auxMovies = state.allMovies
          state.allMovies = ordering(auxMovies,action.payload)
        },

        DetailsMovies : (state, action)=>{
            state.details = action.payload
        },

        clearDetail : (state)=>{
            state.details = []
        },

        searchBar:(state,action) =>{
          console.log(action.payload,"reducerrr")
           state.allMovies = data.filter(e => e.Title.toLowerCase().includes(action.payload) )
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

  export const asyncAllgenres = (id) => {
    return async function(dispatch){
      //let response = await axios.get(`http://localhost:3001/home/:${id}`)
      return dispatch(allgenres(allgenre))
    }
  }

  export const asyncGetName = (name) =>{
    return  async function(dispatch){
      return dispatch(searchBar(name))
    }
 }

export const {allMovies,DetailsMovies,clearDetail,allgenres,filterGenre,orderMovies,searchBar} = dataSlice.actions

export default dataSlice.reducer