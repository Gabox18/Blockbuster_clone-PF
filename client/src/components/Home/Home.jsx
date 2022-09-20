import React, { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {asyncallMovies} from '../../redux/slice.js'
import "bootstrap/dist/css/bootstrap.min.css";
import	'./Home.css';
import Paginado from "../Paginado/Paginado.jsx";
import Footer from "../Footer/Footer";
import Navbar from "../Nav Bar/Navbar";
import { Link } from "react-router-dom";
import Carrusel from "../Carrusel/Carrusel.jsx";


function Home(){

// const dispatch = useDispatch(); //es para utilizar esa constante e ir despachando mis acciones (actions)
// const allMovies = useSelector((state) => state.movies); 
    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    let dispatch = useDispatch()
    let {allMovies} = useSelector(state => state.alldata)
    useEffect(()=>{
        dispatch(asyncallMovies())
    }
    ,[dispatch])

    const [currentPage, setCurrentPage] = useState(1); //currentPage => pagina actual setCuPage => la fn que actualiza ese primer estado, que generara, un nuevo state.
    const moviesPerPage = 4;
    //const [orden, setOrden] = useState("");
    
    const indexOfLastMovies = currentPage * moviesPerPage; //para saber el ultimo indice de la pag. 1 = 9 , 2 pag = 18 
    const indexOfFirstMovies = indexOfLastMovies - moviesPerPage; //indice de tu primer movie en la 2da pagina, seria 9.
    const currentMovies = allMovies.slice(indexOfFirstMovies,indexOfLastMovies);

    return(
        <>
            <div className="homeContainer">
                <div className="navbarContainer">
                    <Navbar setCurrentPage={setCurrentPage} />
                </div>

                <div>
                    <Carrusel/>
                    <Carrusel/>
                    <Carrusel/>
                </div>

                <div className="cardContainer">
                    {currentMovies?.map((e, i)=> {
                        return (
                            <Link to={"/details/" + e.imdbID}  key={i}>
                                <div className="card bg-dark" style={{width: '18rem'}}>
                                    <img src={e.Poster} className="card-img-top" alt="cardImg" />
                                    <div className="card-body">
                                        <h5 className="card-title text-white textCard">{e.Title}</h5>
                                        <p className="card-text text-white textCard">{e.Plot}</p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>  
                            </Link>                  
                        )
                    })}
                </div>
                <div>
                    <Paginado
                        setCurrentPage ={setCurrentPage}
                        currentPage ={currentPage}
                        moviesPerPage={moviesPerPage}
                        allMovies={allMovies.length}
                        paginado={paginado}
                    />
                </div>
                <div className="footerContainer">
                    <Footer/>
                </div>

            </div>
        </>
    )
}
export default Home;