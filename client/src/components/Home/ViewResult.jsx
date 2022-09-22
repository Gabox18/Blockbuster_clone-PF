import React, {useState} from "react";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import Paginado from "../Paginado/Paginado";
import { asyncallMovies } from "../../redux/slice.js";
import Navbar from "../Nav Bar/Navbar";

function ViewResult(){
    let dispatch = useDispatch();
    let { allMovies } = useSelector((state) => state.alldata);

    const [currentPage, setCurrentPage] = useState(1); 
    const moviesPerPage = 4;
    //const [orden, setOrden] = useState("");
    const indexOfLastMovies = currentPage * moviesPerPage; 
    const indexOfFirstMovies = indexOfLastMovies - moviesPerPage; 
    const currentMovies = allMovies.slice(
      indexOfFirstMovies,
      indexOfLastMovies
    );
    console.log('currentMovies ->', currentMovies);
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // useEffect(() => {
    //     dispatch(asyncallMovies());
    //   }, [dispatch]);
    
    return(
        <>
        <div className="navbarContainer">
          <Navbar setCurrentPage={setCurrentPage} />
        </div>
        <div className="cardContainer">
          {currentMovies?.map((e, i) => {
            return (
              <Link to={"/details/" + e.imdbID} key={i}>
                <div className="cardBg-dark" style={{ width: "12rem" }}>
                  <img src={e.Poster} className="card-img" alt="cardImg" />
                  <div className="card-body">
                    <h5 className="card-title text-white textCard">
                      {e.Title}
                    </h5>
                    <p className="card-text text-white textCard">{e.Plot}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <Paginado
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            moviesPerPage={moviesPerPage}
            allMovies={allMovies.length}
            paginado={paginado}
          />
        </div>
        </>
    )
}

export default ViewResult;