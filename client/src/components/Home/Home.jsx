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
import Carrusel1 from "../Carrusel/Carrusel1.jsx";

function Home() {
  let dispatch = useDispatch();
  let { copyAllMovies } = useSelector((state) => state.alldata);

  useEffect(() => {
    if (!copyAllMovies) dispatch(asyncallMovies());
  }, [copyAllMovies, dispatch]);

  let arrMovieFiltrado = copyAllMovies?.filter((e) => e.status === true);
  let arrFeaturedMovies = arrMovieFiltrado?.filter((e) => e.imdbRating > 8);
  let arrRecentMovies = arrMovieFiltrado?.filter((e) => e.year >= 2019);
  let arrActionMovies = arrMovieFiltrado?.filter((e) => e.genre >= "Action");

  let arrPopularMovies = arrMovieFiltrado?.filter(
    (e) => parseInt(e.imdbVotes.split(",").join("")) >= 700000
  );

  return (
    <>
      <div className="homeContainer">
        <div className="navbarContainer">
          <Navbar className="navbarFixy" />
        </div>

        <section className="cabecera">
          <div className="contenido">
            <div>
              <img
                className="logoHomeOficial"
                src="https://bendblockbuster.com/wp-content/themes/blockbuster/assets/images/blockbuster-logo.svg"
              ></img>
            </div>
            <h3 className="subBlockTittle">
              Welcome where your dreams come true
            </h3>
          </div>
        </section>
        <div className="conteiner-carruzel-home1">
          <h2 className="textCarruzel">Featured movies</h2>
          <Carrusel array={arrFeaturedMovies} />
        </div>
        <div className="conteiner-carruzel-home">
          <h2 className="textCarruzel2">Recent movies</h2>
          <Carrusel1 array={arrRecentMovies} />
        </div>
        <div className="conteiner-carruzel-home">
          <h2 className="textCarruzel">Popular movies</h2>
          <Carrusel array={arrPopularMovies} />
        </div>
        <div className="conteiner-carruzel-home">
          <h2 className="textCarruzel2">Action movies</h2>
          <Carrusel1 array={arrActionMovies} />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
