import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncallMovies } from "../../redux/slice.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Footer from "../Footer/Footer";
import Navbar from "../Nav Bar/Navbar";
import { useHistory } from "react-router-dom";
import ReactPlayer from 'react-player';
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
            <div className="videoCabecera">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/Oy_SER6dfK4"
                controls
              />
              {/* <>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="img" />
                  </div>
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="img" />
                  </div>
                  <div className="carousel-item active">
                    <img src={img} className="d-block w-100" alt="img" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              </> */}
            </div>
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
