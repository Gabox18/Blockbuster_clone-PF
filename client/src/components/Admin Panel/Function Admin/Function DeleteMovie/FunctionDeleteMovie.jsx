import React, { useEffect } from "react";
import axios from "axios";
import { asyncallMovies, asyncDeleteMovie } from "../../../../redux/slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FunctionBanMovie from "../Function BanMovie/FunctionBanMovie";


export default function FunctionDeleteMovie(){
    const dispatch = useDispatch();
    const {allMovies} = useSelector(state=> state.alldata);
    const [movieDelete, setMovieDelete] = useState();

// useEffect(() => {
//     dispatch(asyncallMovies());
//   },[dispatch]);

useEffect(() => {
    Array.isArray(allMovies)
      ? dispatch(asyncallMovies())
      : dispatch(asyncallMovies());
  }, [dispatch]);

function handleDelete(){
    dispatch(asyncDeleteMovie(movieDelete));
    dispatch(asyncallMovies(setMovieDelete));
}

function handleChange(e){
    e.preventDefault();
    setMovieDelete(e.target.value)
}
 

    return( 
        <div className="allFondo">
        <select onChange={(e)=> handleChange(e)}>
          {allMovies&&allMovies.map((movies) => (
              <option value={movies.id}>{movies.name}</option>
          ))} </select>
          <button onClick={() => handleDelete()}> Delete </button>

          <FunctionBanMovie/>
      </div>

      
    )

}