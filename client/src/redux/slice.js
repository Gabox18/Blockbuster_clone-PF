import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {allgenre} from './dataMock.js'
import ordering from '../Funciones_js/Ordenamiento.js'

const initialState = {
    allMovies: [],
    copyAllMovies:[],
    genres : [],
    details:{},
    infoInput:{},
    user:{},
    commentUsers:{}
  };

export const dataSlice = createSlice({
    name:'allData',
    initialState,
    reducers:{
        allMovies : (state, action)=>{
            state.allMovies = action.payload
            state.copyAllMovies = action.payload
        },

        setUser:(state,action) =>{
          state.user = action.payload
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
           state.allMovies = state.copyAllMovies.filter(e => e.name.toLowerCase().includes(action.payload))   
        },

        infoAdmin:(state,action) =>{
          console.log(action.payload,"infoinput")
          state.infoInput = action.payload 
        },

        commentInput:(state,action) =>{
          console.log(action.payload,"inputtt")
          state.commentUsers = action.payload
          console.log(state.commentUsers,'estado')
        },
    }
})

export const asyncallMovies = () => {
    return async function(dispatch){
      try {
        let response = await axios("https://back-end-movies-henry2.onrender.com/")
        return dispatch(allMovies(response.data))
      } catch (error) {
        console.log(error,'from allMovies')
      } 
    }
  }
  
  export const asyncgetDetails = (id) => {
    return async function(dispatch){
      try {
        let response = await axios.get(`https://back-end-movies-henry2.onrender.com/detail/${id}`)
        return dispatch(DetailsMovies(response.data[0]))
      } catch (error) {
        console.log(error,'from Details')
      }      
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

 export const asynSetUser = (input) =>{
  return  async function(dispatch){
    console.log(input, 'el asyn del slices' )
    try {
      let response = await axios.post(`https://back-end-movies-henry2.onrender.com/newU`,input)
    return dispatch(setUser(response.data))
    } catch (error) {
      console.log(error,'from create user')
    }
    }
  }
  
export const asyncInfoAdmin = (input) =>{
  return async function(dispatch){
    return dispatch(infoAdmin(input))
  }
}
export const asyncFormComment = (input) =>{
  return async function(dispatch){
    return dispatch(commentInput(input))
  }
}

export const {allMovies,DetailsMovies,clearDetail,allgenres,filterGenre,orderMovies,searchBar,infoAdmin,commentInput,setUser} = dataSlice.actions

export default dataSlice.reducer