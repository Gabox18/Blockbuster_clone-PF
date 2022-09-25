import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";
import {data,allgenre} from './dataMock.js'
import ordering from '../Funciones_js/Ordenamiento.js'

const initialState = {
    allMovies: [],
    copyAllMovies:[],
    genres : [],
    details:{},
    infoInput:{}
  };

export const dataSlice = createSlice({
    name:'allData',
    initialState,
    reducers:{
        allMovies : (state, action)=>{
            state.allMovies = action.payload
            state.copyAllMovies = action.payload
        },

        formInput:(state,action) =>{
          state.infoInput = action.payload
        },

        allgenres :(state, action)=>{
          state.genres = action.payload
        },

        filterGenre :(state, action)=>{
          let auxMovies = state.copyAllMovies
          state.allMovies = action.payload === 'all'
          ? state.copyAllMovies
          : auxMovies.filter((e) => e.genre?.includes(action.payload))
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
            //console.log(action.payload,"reducerrr" )
           state.allMovies = data.filter(e => e.name.toLowerCase().includes(action.payload) )
        }
    }
})

export const asyncallMovies = () => {
    return async function(dispatch){
      try {
        //let response = await axios("https://back-end-movies-henry2.onrender.com/")
        //console.log(response.data,'desde el slice')
        return dispatch(allMovies(data))
      } catch (error) {
        console.log(error,'desde el slice')
      } 
    }
  }

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Access-Control-Allow-Origin': 'https://back-end-movies-henry2.onrender.com'
// 	    }
//   };

//   export function asyncallMovies(){
//     return function(dispatch){
//         return fetch('https://back-end-movies-henry2.onrender.com/', options)
//         .then(resp=>resp.json())
//         .then(respJson=>{
//             dispatch(allMovies(respJson))
//         }).catch(error =>console.log(error,'----->soy el error'))
//     }
// }

  export const asyncgetDetails = (id) => {
    return async function(dispatch){
      //let response = await axios.get(`http://localhost:3000/home/:${id}`)
      let movieD = data.filter(e=>e.id===id)
      return dispatch(DetailsMovies(movieD[0]))
    }
  }

  export const asyncAllgenres = (id) => {
    return async function(dispatch){
      //let response = await axios.get(`http://localhost:3000/home/:${id}`)
      return dispatch(allgenres(allgenre))
    }
  }

  export const asyncGetName = (name) =>{
    return  async function(dispatch){
      return dispatch(searchBar(name))
    }
  }

 export const asyncFormInfo = (input) =>{
  return  async function(dispatch){
    return dispatch(formInput(input))
    }
  }
export const {allMovies,DetailsMovies,clearDetail,allgenres,filterGenre,orderMovies,searchBar,formInput} = dataSlice.actions

export default dataSlice.reducer