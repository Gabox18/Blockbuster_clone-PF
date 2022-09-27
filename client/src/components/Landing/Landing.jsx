import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import LoginButton from "../User/Login";
import logo from "../../assets/Logo.png";
import Carrusel from "../Carrusel/Carrusel";
import { useDispatch, useSelector } from "react-redux";
import { asyncallMovies } from "../../redux/slice";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Landing() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);

  let { copyAllMovies } = useSelector((state) => state.alldata);
const moviesCarrusel = copyAllMovies.filter(e => e.name !=='Spider-Man')
console.log(copyAllMovies)
console.log(moviesCarrusel)
  return (
    <>
      <div className="ContainerLanding">
        <div>
          <nav className="navBarLanding">
            <div>
              <div className="img-nav">
                <Link to={"/"}>
                  <img src={logo} width="100px" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="btn-log">
              <div>
                <LoginButton />
              </div>
            </div>
          </nav>
        </div>
        <div className="container-plan">
          <div>
            <div className="container-logo">
              <img
                src="https://logodownload.org/wp-content/uploads/2021/03/paramount-plus-logo-0.png"
                width="120px"
                alt="img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png"
                width="100px"
                alt="img"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png"
                width="120px"
                alt="img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1200px-Warner_Bros_logo.svg.png"
                width="90px"
                alt="img"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Universal-Logo.png"
                width="130px"
                alt="img"
              />
            </div>
          </div>
          <div>
            <p className="p">START ENJOYING THE BEST STORIES</p>
            <p className="p">MADE ESPECIALLY FOR YOU</p>
          </div>
          <div className="contMembership">
            <div class="cardP">
              <p class="titleP">Silver</p>
              <div class="pricecontainerP">
                <p class="priceP">U$D 19.99</p>
                <p class="pricedescriptor">/month</p>
              </div>
              <p class="includesP">This Plan Includes:</p>
              <ul class="benefitlistP">
                <li>Full HD 1080pi</li>
                <li>20 movies</li>
                <li>Fav list</li>
              </ul>
          
              <button className="btn"> Button</button> 
            </div>
            <div class="cardP1">
              <p class="titleP1">Gold</p>
              <div class="pricecontainerP">
                <p class="priceP">U$D 24.99</p>
                <p class="pricedescriptor">/month</p>
              </div>
              <p class="includesP">This Plan Includes:</p>
              <ul class="benefitlistP">
                <li>Full HD 4k</li>
                <li>40 movies</li>
                <li>Fav list</li>
              </ul>
              <button className="btn1"> Button</button>
            </div>
          </div>
          <div>
            <div className="conteiner-shop-plan">
              <div className="containerLanding">
              </div>
              <div>   
              </div>
              <div className="carrusel">
                <Carrusel array={moviesCarrusel} />
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
