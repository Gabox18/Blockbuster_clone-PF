import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncallMovies } from "../../redux/slice.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Footer from "../Footer/Footer";
import Navbar from "../Nav Bar/Navbar";
import ReactPlayer from "react-player";
import Carrusel from "../Carrusel/Carrusel.jsx";
import img from "../../assets/imgHome.jpg";

function Home() {
  let dispatch = useDispatch();
  let { copyAllMovies } = useSelector((state) => state.alldata);

  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);

  let arrFeaturedMovies = copyAllMovies.filter((e) => e.imdbRating > 8);
  let arrRecentMovies = copyAllMovies.filter((e) => e.year >= 2021);
  let arrPopularMovies = copyAllMovies.filter(
    (e) => parseInt(e.imdbVotes.split(",").join("")) >= 700000
  );

  console.log(arrPopularMovies);
  return (
    <>
      <div className="homeContainer">
        <div className="navbarContainer">
          <Navbar />
        </div>

        <section className="cabecera">
          <img className="" src={img} alt={"poster"} />
          <div className="contenido">
            <h1>Blockbuster</h1>
            <h3>
              Life is unpredictable and control is just an illusion that makes
              us feel small and helpless.
            </h3>
            <div className="videoCabecera">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/Oy_SER6dfK4"
                controls
              />
            </div>
          </div>
        </section>

        <div className="conteiner-carruzel-home">
          <h2 className="textCarruzel">Featured movies:</h2>
          <Carrusel array={arrFeaturedMovies} />
        </div>
        <div className="conteiner-carruzel-home">
          <h2 className="textCarruzel">Recent movies:</h2>
          <Carrusel array={arrRecentMovies} />
        </div>
        <div className="conteiner-carruzel-home">
          <h2 className="textCarruzel">Popular movies:</h2>
          <Carrusel array={arrPopularMovies} />
        </div>

        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
