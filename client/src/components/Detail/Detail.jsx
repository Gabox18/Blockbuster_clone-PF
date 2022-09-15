import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './detail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {asyncgetDetails,clearDetail} from '../../redux/slice.js';


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    let {details} = useSelector(store => store.alldata);
    
    useEffect(() =>{
        dispatch(asyncgetDetails(id))
        console.log(details)
        return ()=>{
          dispatch(clearDetail())
        }
      },[dispatch])
  
  return (
      <div>
      <h1>Title: {details[0]?.Title} ({details[0]?.id})</h1>
          <h2>Actors: {details[0]?.Actors && details[0]?.Actors}</h2>
          <h2>Year: {details[0]?.Year}</h2>
          <h2>Genre: {details[0]?.Genre}</h2>
          <h2>Director: {details[0]?.Director} </h2>
          <h2>Language: {details[0]?.Language} km2</h2>
          <h2>Ratings: {details[0]?.Ratings.length && details[0]?.Ratings.map((e,i) => {
            return <p key={i}>{e.Value}</p>
          })}</h2> 
          <h2>Pais: {details[0]?.Country}</h2>
          <div className="d-grid gap-2 mt-2 position-absolute">
          <Link to ='/home'> 
                  <button className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
                  type='shadow-lg p-3 mb-5 bg-body rounded'> Back </button>
            </Link>
        </div>

    </div>
  )
}
