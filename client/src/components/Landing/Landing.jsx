import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";



export default function Landing() {
  const scrollCard = useRef();
  const { user,loginWithRedirect } = useAuth0();
  let userDB = useSelector(state=>state.alldata.user)
  let [start, setStart]=  useState(4)
  let [disable, setDisable]=  useState(false)
  let dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    dispatch(asyncallMovies());
    dispatch(asyncGetUser(user?.email))
  }, [dispatch, user]);

let { copyAllMovies ,payPaypalSil , payPaypalGold } = useSelector((state) => state.alldata);
const moviesCarrusel = copyAllMovies.filter(e => e.name !=='Spider-Man')


function handleSubmitSilver() {
  !user
  ?loginWithRedirect()
  :userDB?.id?
  dispatch(asynPaymentSilver())
  :history.push('/profile')
  
}
function handleSubmitGold() {
  !user
  ?loginWithRedirect()
  :userDB?.id?
  dispatch(asynPaymentGold())
  :history.push('/profile')
}

// function scrollButton(){
//   console.log('se mando scroll!')
//   let elementScroll = document.getElementById('cardScroll')
//   elementScroll.scrollIntoView({
//     behaviour: "smooth",
//     block: "start",
//     inline: "nearest"
//   })
// }

const scrollButton = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  })
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
              onClick={() => scrollButton(scrollCard)}
              className="glightbox play-btn mb-4"
            ></a>
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
                className="c"
              />
            </div>
          </div>
          <div>
            <p className="pMmembership">START ENJOYING THE BEST STORIES</p>
            <p className="pMmembership">MADE ESPECIALLY FOR YOU</p>
          </div>

          <div className="contMembership" ref={scrollCard} >

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

              {typeof payPaypalSil.data === "string" ? (
                <button
                  className="btn1"
                  disabled={disable}
                  onClick={() => {
                    setDisable(true)
                    let token = payPaypalSil.data.split('').slice(49,66).join('')
                    let userToken = {
                      id:userDB.id,
                      token: token
                    }
                    try {
                      axios.put(`/setTokenSilver`,userToken)
                    } catch (error) {
                      console.log(error)
                    }
                    setTimeout(()=>{
                      window.location.href = payPaypalSil.data;
                      },3000)
                      setInterval(()=>{
                      setStart(start= start-1)
                    },1000)
                  }}
                >
                  {" "}
                  {`Redirect ${start}`}
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
              {typeof payPaypalGold.data === "string" ? (
                <button
                  className="btn1"
                  disabled={disable}
                  onClick={() => {
                    setDisable(true)
                    let token = payPaypalGold.data.split('').slice(49,66).join('')
                    let userToken = {
                      id:userDB.id,
                      token: token
                    }
                    try {
                      axios.put(`/setTokenGold`,userToken)
                    } catch (error) {
                      console.log(error)
                    }
                    setTimeout(()=>{
                      window.location.href = payPaypalGold.data;
                      },3000)
                      setInterval(()=>{
                      setStart(start= start-1)
                    },1000)
                  }}
                >
                  {" "}
                  {`Redirect ${start}`}
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
