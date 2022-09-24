import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import LoginButton from "../User/Login";
import logo from "../../assets/Logo.png";
import Carrusel from "../Carrusel/Carrusel";
import { useDispatch } from "react-redux";
import { asyncallMovies } from "../../redux/slice";
import { Link } from "react-router-dom";


export default function Landing() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);
  return (
    <>
      <div className="ContainerLanding">
        <div>
          <nav className="navBarLanding">
            <div>
              <div className="img-nav">
                <Link to={'/'}>
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
          <div>
            <div className="conteiner-shop-plan">
              <div className="container">
                <div className="card_box">
                  <span>Silver</span>
                  <p>
                    .Maximum quality 1080p.<br></br>.1 device at a time.<br></br>
                    .You can watch 20 movies per month.
                  </p>
                </div>
                    
                  <Link to={'/'} className="fancy">
                    <span className="top-key"></span>
                    <span className="text">Buy Plan</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Link>
                  <div>
              <h3>$300 per Month</h3>
              </div>

                <div className="card_box2">
                  <span> </span>
                  <p>
                    .Maximum quality 4K.<br></br>.4 device at a time.<br></br>
                    .You can watch 50 movies per month.
                  </p>
                </div>
                
              
                  <Link to={'/'} className="fancy">
                    <span className="top-key"></span>
                    <span className="text">Buy Plan</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                  </Link>

              </div><div>
              <h3>$500 per Month</h3>
              </div>
              <div className="carrusel">
                <Carrusel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
