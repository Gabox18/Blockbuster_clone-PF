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
    commentMovie:{},
    commentFromMovies:[]
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
           state.allMovies = state.copyAllMovies.filter(e => e.name.toLowerCase().includes(action.payload))   
        },

        infoAdmin:(state,action) =>{
          console.log(action.payload,"infoinput")
          state.infoInput = action.payload 
        },

        commentInput:(state,action) =>{
          console.log(action.payload,"inputtt")
          state.commentMovie = action.payload
          console.log(state.commentMovie,'estado')
        },
        commentByid:(state,action) =>{
        
          state.commentFromMovies = action.payload
          console.log(state.commentFromMovies,"infosubida")
        },
        editComment:(state,action) =>{
          state.commentFromMovies = action.payload
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

 export const asyncFormInfo = (input) =>{
  return  async function(dispatch){
    console.log(input, 'el asyn del slices' )
    let inputf = {
      name : input.name,
      lastname : input.lastname,
      nickname : 'prueba',
      picture : "hahahahaha",
      email : '@hotmail',
      status : true,
      category : 'user'
    }
    try {
      let response = await axios.post(`https://back-end-movies-henry2.onrender.com/newU`,inputf)
    return dispatch(formInput(response.data))
    } catch (error) {
      console.log(error)
    }
    }
  }
  
export const asyncInfoAdmin = (input) =>{
  return async function(dispatch){
    return dispatch(infoAdmin(input))
  }
}

export const asyncFormComment = (input,idMovie) =>{
  return async function(dispatch){
  try {
    let response = await axios.post(`https://back-end-movies-henry2.onrender.com/detail/${idMovie}`,input)
    console.log(input,"en asyncform")
      return dispatch(commentInput(response.data))
    }
   catch (error) {
    console.log(error,'from Details')
  }
}
}
export const asyncCommentById = (id,input) =>{
  return async function(dispatch){
    try {
      let response = await axios.post(`https://back-end-movies-henry2.onrender.com/comments/${id}`,input)
      console.log(input ,'iddeslice')
      return dispatch(commentByid(response.data[0]))

    } catch (error) {
      console.log(error,'from Details')
    }      
  }
}
export const asyncEditComment = (info) =>{
  return async function(dispatch){
    try {
      let response = await axios.post()
    } catch (error) {
      
    }
  }
}
export const asyncDeleteComment =(id,idParams) =>{
  return async function (dispatch){
    try {
      let response = axios.post(`https://back-end-movies-henry2.onrender.com/detail/${idParams}`,id)
    } catch (error) {
      
    }
  }
}


export const {allMovies,DetailsMovies,clearDetail,allgenres,filterGenre,orderMovies,searchBar,formInput,infoAdmin,commentInput,commentByid,editComment} = dataSlice.actions

export default dataSlice.reducer