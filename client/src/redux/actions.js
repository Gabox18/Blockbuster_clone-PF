//import axios from "axios";
import data from './dataMock.js'
export const GET_ALL_MOVIES = 'GET_ALL_MOVIES'

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
