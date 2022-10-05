import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import Carrusel from "../Carrusel/Carrusel";
import { useDispatch, useSelector } from "react-redux";
import { asyncallMovies,asyncGetUser,asynPaymentSilver,asynPaymentGold } from "../../redux/slice";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../Footer/Footer";
import video from "../../assets/video.mp4"
import Nav from "../Nav Bar/Navbar"
import flecha from "../../assets/flecha.png"



export default function Landing() {
  const { user,loginWithRedirect } = useAuth0();
  let userDB = useSelector(state=>state.alldata.user)
  console.log(user,'user')
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncallMovies());
    dispatch(asyncGetUser(user?.email))
  }, [dispatch, user]);

let { copyAllMovies } = useSelector((state) => state.alldata);
let { payPaypal } = useSelector((state) => state.alldata);
const moviesCarrusel = copyAllMovies.filter(e => e.name !=='Spider-Man')
console.log(copyAllMovies)
console.log(payPaypal.data)

function handleSubmitSilver() {
  userDB?.id?
  dispatch(asynPaymentSilver())
  :loginWithRedirect()
  
}
function handleSubmitGold() {
  userDB?.id?
  dispatch(asynPaymentGold())
  :loginWithRedirect()
}

function scrollButton(){
  console.log('scroll boton!')
  window.scrollY(100, 100)
}

  return (
    <>
      <div className="ContainerLanding">
        <div>
          <Nav />
        </div>

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero">
          <video src={video} className='videoLanding' muted loop autoPlay ></video>
          <div
            className="hero-container"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="loader">
              <span className="landingName">BlockBuster</span>
              <span>BlockBuster</span>
            </div>
            <a
              href="https://res.cloudinary.com/dapicfoap/video/upload/v1664469154/BlockBuster/Avengers_Endgame_Tr%C3%A1iler_oficial_1_Espa%C3%B1ol_Latino_HD_mtov89.mp4"
              className="glightbox play-btn mb-4"
            ></a>
            <a href="#»primerp»" className="about-btn scrollto">
              About our plans
            </a>
          </div>
        </section>
        {/* <!-- End Hero Section --> */}

        <div className="container-plan">
          <div>
            <div className="container-logo">
              <img
                src="https://logodownload.org/wp-content/uploads/2021/03/paramount-plus-logo-0.png"
                width="120px"
                alt="img"
                className="LogosM"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png"
                width="100px"
                alt="img"
                className="LogosM"
              />
              <img
                src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png"
                width="120px"
                alt="img"
                className="LogosM"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1200px-Warner_Bros_logo.svg.png"
                width="90px"
                alt="img"
                className="LogosM"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2021/11/Universal-Logo.png"
                width="130px"
                alt="img"
                className="LogosM"
              />
            </div>
          </div>
          <div>
            <p className="pMmembership">START ENJOYING THE BEST STORIES</p>
            <p className="pMmembership">MADE ESPECIALLY FOR YOU</p>
          </div>

          <div className="contMembership" id='»primerp»'>
          
          

            <div className="cardP">
              <p className="titleP">Silver</p>
              <div className="pricecontainerP1">
                <p className="priceP">U$D 19.99</p>
                <p className="pricedescriptor">/month</p>
              </div>
              <p className="includesP">This Plan Includes:</p>
              <ul className="benefitlistP">
                <li className="listMmemer">Full HD 1080pi</li>
                <li className="listMmemer">20 movies</li>
                <li className="listMmemer">Fav list</li>
              </ul>

              {typeof payPaypal.data === "string" ? (
                <button
                  className="btn1"
                  onClick={() => {
                    window.location.href = payPaypal.data;
                  }}
                >
                  {" "}
                  Redirect
                </button>
              ) : (
                <button className="btn1" onClick={handleSubmitSilver}>
                  {" "}
                  Button
                </button>
              )}
            </div>

            <div className="cardP1">
              <p className="titleP1">Gold</p>
              <div className="pricecontainerP">
                <p className="priceP">U$D 24.99</p>
                <p className="pricedescriptor">/month</p>
              </div>
              <p className="includesP">This Plan Includes:</p>
              <ul className="benefitlistP">
                <li className="listMmemer">Full HD 4k</li>
                <li className="listMmemer">40 movies</li>
                <li className="listMmemer">Fav list</li>
              </ul>
              {typeof payPaypal.data === "string" ? (
                <button
                  className="btn1"
                  onClick={() => {
                    window.location.href = payPaypal.data;
                  }}
                >
                  {" "}
                  Redirect
                </button>
              ) : (
                <button className="btn1" onClick={handleSubmitGold}>
                  {" "}
                  Button
                </button>
              )}
            </div>

          </div>
          <div>
            <div className="conteiner-shop-plan">
              <div className="containerLanding"></div>
              <div></div>
              <div className="carrusel">
                <Carrusel array={moviesCarrusel} />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
