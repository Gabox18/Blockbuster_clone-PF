import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {allMovies} from '../../redux/actions';
import "bootstrap/dist/css/bootstrap.min.css";
import	'./Home.css';
import Footer from "../Footer/Footer";
import Navbar from "../Nav Bar/Navbar";
import { Link } from "react-router-dom";


function Home(){
    let dispatch = useDispatch()
    let Movies = useSelector(store => store.allMovies)
    useEffect(()=>{
        dispatch(allMovies())
    }
    ,[dispatch])
    return(
        <>
            <div className="navbarContainer">
                <Navbar />
            </div>
            {console.log(Movies)}
            <div className="cardContainer">
                {Movies?.map((e, i)=> {
                    return (
                        <>
                        <Link to={"/details/" + e.imdbID}>
                            <div key={i} className="card" style={{width: '18rem'}}>
                                <img src={e.Poster} className="card-img-top" alt="cardImg" />
                                <div className="card-body">
                                    <h5 className="card-title">{e.Title}</h5>
                                    <p className="card-text">{e.Plot}</p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>  
                        </Link>                  
                        </>
                    )
                })}
            </div>
            <div className="footerContainer">
                <Footer/>
            </div>
        </>
    )
}
export default Home;