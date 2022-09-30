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

  let arrFeaturedMovies = copyAllMovies.filter((e) => e.imdbRating > 8);
  let arrRecentMovies = copyAllMovies.filter((e) => e.year >= 2020);
  let arrPopularMovies = copyAllMovies.filter(
    (e) => parseInt(e.imdbVotes.split(",").join("")) >= 700000
  );

  console.log(ReactPlayer);
  
  return (
    <>
      <div className="homeContainer">
        <div className="navbarContainer">
          <Navbar />
        </div>

        <section className="cabecera">
          <img className="" src={img} alt={"poster"} />
          <div className="contenido">
            <h1 className="blocktitle">Blockbuster</h1>
            <h3 className="subBlockTittle">
              Life is unpredictable and control is just an illusion that makes
              us feel small and helpless.
            </h3>
            <div className="videoCabecera">
          
              <ReactPlayer
                className="react-player"
                url="https://res.cloudinary.com/dapicfoap/video/upload/v1664469154/BlockBuster/Avengers_Endgame_Tr%C3%A1iler_oficial_1_Espa%C3%B1ol_Latino_HD_mtov89.mp4"
                playing={true}
                onReady
                muted
              />
            </div>
          </div>
        </section>
        <div className="conteiner-carruzel-home">
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

        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
