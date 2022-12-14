import React, {useState} from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import Paginado from "../Paginado/Paginado";
import Navbar from "../Nav Bar/Navbar";
import Card from "../Card/Card";
import './ViewResult.css'
import Footer from "../Footer/Footer"

function ViewResult(){
    let { allMovies } = useSelector((state) => state.alldata);

    const [currentPage, setCurrentPage] = useState(1); 
    const moviesPerPage = 12;
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


    
    return(
        <div className="conteinerViewResult">
          <div className="navbarContainer">
            <Navbar setCurrentPage={setCurrentPage} />
          </div>
          <section className="containerC">
          <div className="cardContainerViewResult">
            {allMovies.length === 0  //renderizado condicional 
            ? <h2 className="not-result">We couldn’t find any movie matching</h2>
            :currentMovies?.map((e, i) => {
              return ( 
                <Link to={"/details/" + e.id} key={i}>
                    <Card  className="cartitass" img={e.poster} Title={e.name}  Plot={e.plot}/>
                </Link> 
              );
            })}
          </div>
            <div className="containerPaginado">
          { 
              <Paginado
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                moviesPerPage={moviesPerPage}
                allMovies={allMovies.length}
                paginado={paginado}
              />}
            </div>
          </section>
          <Footer/>
        </div>        
    )
}

export default ViewResult;