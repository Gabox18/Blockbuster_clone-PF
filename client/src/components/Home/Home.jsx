import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncallMovies } from "../../redux/slice.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Paginado from "../Paginado/Paginado.jsx";
import Footer from "../Footer/Footer";
import Navbar from "../Nav Bar/Navbar";
import { Link, useHistory } from "react-router-dom";
import Carrusel from "../Carrusel/Carrusel.jsx";
import img from  '../../assets/imgHome.jpg'






function Home() {
  // const dispatch = useDispatch(); //es para utilizar esa constante e ir despachando mis acciones (actions)
  // const allMovies = useSelector((state) => state.movies);
  let dispatch = useDispatch();
  let history = useHistory();
  let { allMovies } = useSelector((state) => state.alldata);
  let {copyAllMovies} = useSelector(state => state.alldata);

  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);

  let arrFeaturedMovies =  copyAllMovies.filter(e => e.imdbRating > 8);
  let arrRecentMovies = copyAllMovies.filter(e => e.Year >= 2021);
  let arrPopularMovies = copyAllMovies.filter(e => e.imdbVotes >= 7);
  

  return (
    <>
      <div className="homeContainer">
        <div className="navbarContainer">
          <Navbar />
        </div>

        <section className="cabecera">
          <img className="" src={img} />
          <div className="contenido" >
            <h1>Blockbuster</h1>
            <h3>Life is unpredictable and control is just an illusion that makes us feel small and helpless.</h3>
          </div>
        </section>

        <div>
            <h2 className="textCarruzel">Featured movies:</h2>
            <Carrusel array={arrFeaturedMovies}/>
        </div>
        <div>
            <h2 className="textCarruzel">Recent movies:</h2>
            <Carrusel array={arrRecentMovies}/>
        </div>
        <div>
            <h2 className="textCarruzel">Popular movies:</h2>
            <Carrusel array={arrPopularMovies}/>
        </div>
        
        
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
