import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './detail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { allMovies, getDetails } from '../../redux/actions';

export default function Detail() {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();
    let dataMovies = useSelector(store => store.allMovies);
        console.log(dataMovies);
    
    const moockMovie = dataMovies[0]
        console.log(moockMovie)
  
    useEffect(() =>{
        return function(){
        dispatch(allMovies())
        }
      },[dispatch])
        
    // useEffect(()=> {
    //     dispatch(getDetails(id))
    //     console.log("Se envió")
    //   },[dispatch])

  return (
    <div className="maincontainer">
      <div className="bg-image">
      <h1>Title: {moockMovie.Title} ({moockMovie.id})</h1>
          <h2>Actors: {moockMovie.Actors && moockMovie.Actors}</h2>
          <h2>Year: {moockMovie.Year}</h2>
          <h2>Genre: {moockMovie.Genre}</h2>
          <h2>Director: {moockMovie.Director} </h2>
          <h2>Language: {moockMovie.Language} km2</h2>
          <h2>Ratings: {moockMovie.Ratings.length && moockMovie.Ratings.map((e,i) => {
            return <p key={i}>{e.Value}</p>
          })}</h2> 
          <h2>Pais: {moockMovie.Country}</h2>

          <div className="d-grid gap-2 mt-2 position-absolute">
          <Link to ='/home'> 
                  <button className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
                  type='shadow-lg p-3 mb-5 bg-body rounded'> Back </button>
            </Link>
        </div>
        </div>
    </div>
  )
}
