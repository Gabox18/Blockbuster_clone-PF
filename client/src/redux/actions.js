//import axios from "axios";
import data from './dataMock.js'
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'
export const GET_DETAILS = 'GET_DETAILS'

  export const allMovies = () => {
    return async function(dispatch){
        //let response = await axios.get(`http://localhost:3001/types`)
        return dispatch({
          type: GET_ALL_MOVIES,
          payload: data
          //payload: response.data
        })
    }
  }

  export const getDetails = (id) => {
    return async function(dispatch){
      //let response = await axios.get(`http://localhost:3001/home/:${id}`)
      return dispatch({
        type: GET_DETAILS,
        //payload: response.data
        payload: data
      })
    }
  }