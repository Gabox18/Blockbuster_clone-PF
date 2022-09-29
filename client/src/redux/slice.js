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
    commentUsers:{},
    commentMovie:{},
    commentFromMovies:[],
    allUsers:[]
   
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
        allUserAdmin:(state,action)=>{
          state.allUsers = action.payload
        },
        banUserAdmin:(state,action)=>{
         state.allUsers = action.payload
        },
        unBanUserAdmin:(state,action)=>{
          state.allUsers = action.payload
        },
        newAdmin:(state,action)=>{
          state.allUsers = action.payload
        }
  }})

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

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

 

//--------------------------------------------------------------------------------------------------------
//----------------------------------- function user ------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
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

  


//--------------------------------------------------------------------------------------------------------------------
//------------------------------------function admin----------------------------------------------------------------------  
//-----------------------------------------------------------------------------------------------------------------
export const asyncInfoAdmin = (input) =>{
  return async function(dispatch){
    return dispatch(infoAdmin(input))
  }
}
// export const asyncallUsers = ()=>{
//   return async function (dispatch){
//    try{
//     let response = await axios.get("https://back-end-movies-henry2.onrender.com/users")
//     return dispatch(allUserAdmin(response.data))
//    }catch(e){}
//   }
// }
export const asyncallUsers = () => {
  return async function(dispatch){
    try {
      let response = await axios("https://back-end-movies-henry2.onrender.com/users")
      return dispatch(allUserAdmin(response.data))
    } catch (error) {
      console.log(error,'from allUSERS')
    } 
  }
}




export const asynbanUsers = (id)=>{
  return async function (dispatch){
     await axios.put("https://back-end-movies-henry2.onrender.com/bannUser",id)
     let response = await axios.get("https://back-end-movies-henry2.onrender.com/users")
    
    return dispatch(banUserAdmin(response))
  }}

  export const asynDesBanUsers = (id)=>{
    return async function (dispatch){
       await axios.put("https://back-end-movies-henry2.onrender.com/unBannUser",id)
       let response = await axios.get("https://back-end-movies-henry2.onrender.com/users")
      
      return dispatch(unBanUserAdmin(response))
    }}

    export const asynNewAdmin = (id)=>{
      return async function (dispatch){
         await axios.put("https://back-end-movies-henry2.onrender.com/createAdm",id)
         let response = await axios.get("https://back-end-movies-henry2.onrender.com/users")
        
        return dispatch(newAdmin(response))
      }}






//----------------------------------------------------------------------------------------------------------------
export const {allMovies,DetailsMovies,clearDetail,allgenres,filterGenre,orderMovies,searchBar,formInput,infoAdmin,commentInput,commentByid,editComment,setUser,allUserAdmin,banUserAdmin,unBanUserAdmin,newAdmin} = dataSlice.actions

export default dataSlice.reducer