import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {allMovies} from '../../redux/actions';

function Home(){
    let dispatch = useDispatch()
    let Movies = useSelector(store => store.allMovies)
    useEffect(()=>{
        dispatch(allMovies())
    }
    ,[dispatch])
    return(
        <>
            {console.log(Movies)}
            {Movies?.map((e,i)=>{
                return (
                <div key={i}>
                    <h1>{e.Title}</h1>
                    <img src={e.Poster} alt='img' height={'300px'}/>
                </div>
                )
            })}
        </>
    )
}
export default Home;