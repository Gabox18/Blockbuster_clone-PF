import {
    GET_ALL_MOVIES,
  } from "./actions.js";
  
  const initialState = {
    allMovies: [],
  };
  
  const rootReducer = (state = initialState, action) => {

    switch (action.type) {
      case GET_ALL_MOVIES:
        return {
          ...state,
          allMovies: action.payload,
        };
  
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;