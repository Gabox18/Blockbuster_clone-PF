import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {allMovies} from '../../redux/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import	'./Home.css';


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
            <div className="cardContainer">
                {Movies?.map((e, i)=> {
                    return (
                        <>
                            <div key={i} className="card" style={{width: '18rem'}}>
                                <img src={e.Poster} className="card-img-top" alt="cardImg" />
                                <div className="card-body">
                                    <h5 className="card-title">{e.Title}</h5>
                                    <p className="card-text">{e.Plot}</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>                    
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Home;