import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./detail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  asyncgetDetails,
  clearDetail,
  asyncUpdateMovie,
  asyncFavoriteMovie,
  asyncFavList,
} from "../../redux/slice.js";
import ComentForm from "../ComentForm.jsx/ComentForm";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../Footer/Footer";
import NavBar from "../Nav Bar/Navbar";
import Allcomments from "../ComentForm.jsx/AllComments/Allcomments";
import CarruselFav from "../Carrusel/CarruselFav";

export default function Detail() {
  const { loginWithRedirect } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  let userdb = useSelector((store) => store.alldata.user);
  let { copyAllMovies, favoriteMovie, details } = useSelector(
    (store) => store.alldata
  );
  //recuerdo de agustin mollo ,espero que les sirva . saludos!!

  let userId = userdb.id;
  let mapFav = favoriteMovie?.filter((e) => e.idUser === userId);
  const filterTrue = copyAllMovies?.filter((e) => e.status === true);
  const arrId = mapFav.map((e) => e.idMovie);
  const moviesCarrusel = filterTrue?.filter((e) => arrId.includes(e.id));
  const input = {
    idMovie: id,
    idUser: userdb.id,
  };
  useEffect(() => {
    dispatch(asyncgetDetails(parseInt(id)));
    dispatch(asyncFavList());

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  function handleAddFav() {
    console.log(input);
    dispatch(asyncFavoriteMovie(input));
    setTimeout(() => {
      dispatch(asyncFavList());
    }, 1000);
  }

  function handleBannMovie() {
    let obj = { id };
    dispatch(asyncUpdateMovie(obj));
  }

  return (
    <>
      <NavBar />
      <div className="container-infoD">
        <div className="container-description">
         <div className="container-detalless">
         <h2 className="title-movie">{details.name}</h2>
          <p className="description-plot" >
            <b >Description:</b>
            {details.plot}
          </p>
          <p className="director">
            <b >Director:</b>
            {details.director}
          </p>
          <p className="director">
            <b>Year:</b>
            {details.year}
          </p>
          <p className="director">
            <b>Rating:</b>
            {details.imdbRating}
          </p>
          <p className="director">
            <b>Genre:</b>
            {details.genre}
          </p>
          <p className="director">
            <b>Actors:</b> {details.actors}
          </p>
          <p className="director">
            <b>Language:</b>
            {details.language}
          </p>
          <div className="container-links">
            {userdb.category === "admin" ||
            userdb.category === "gold" ||
            userdb.category === "silver" ? (
              <Link to={`/details/${id}/play`}>
                <button className="btnplay">
                  <div class="arrow-up">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 14 18"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </div>
                </button>
              </Link>
            ) : (
              <button className="btnplay">
                <div class="arrow-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                </div>
              </button>
            )}

             {arrId.includes(details.id) ? (
                    <div className="butoncitofav">
                      <button onClick={handleAddFav} className="buttonFav">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          fill="red"
                          className="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="butoncitofav1">
                      <button onClick={handleAddFav} className="buttonNoFav">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          fill="white"
                          className="bi bi-heart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  
          </div>
          <div>
          {userdb.category === "admin" ? (
            <div>
              <label class="switch">
                <input type="checkbox" onChange={handleBannMovie} />
                {details.status === true ? (
                  <span className="slider"></span>
                ) : (
                  <span className="slider1"></span>
                )}
              </label>
            </div>
          ) : (
            <></>
          )}
          </div>
         </div>
          <div className="container-imagenc">
            <img src={details.poster} className='imagen-poster' />
          </div>
        </div>
      </div>
      <div className="commentform">
        {userdb.picture ? (
          <ComentForm idParams={parseInt(id)} />
        ) : (
          <div>
            <a onClick={() => loginWithRedirect()}>
              <p className="alert">Click on my to login </p>
             </a>

            <Link to="/">
              <p className="alert2">
                If you are logged in, complete the information in the profile.
               </p>
             </Link>
           </div>
        )}
        </div>
      <div>
      <Allcomments/>
      </div>
      
      
      <Footer/>
    </>

    // <>
    //   <NavBar />
    //   <div className="detailRender">
    //     <div className="cardStyle">
    //       <div className="cardDetail">
    //         <div className="image">
    //           <div>
    //             <img
    //               src={details.poster}
    //               className="card-img-top"
    //               alt="..."
    //               autofocus
    //             />
    //           </div>
    //           <div className="title-btn">
    //             <h2 className="title">{details.name}</h2>
    //             <div className="twobtn">
    // {userdb.category === "admin" ||
    // userdb.category === "gold" ||
    // userdb.category === "silver" ? (
    //   <Link to={`/details/${id}/play`}>
    //     <button className="btnplay">
    //       <div class="arrow-up">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="40"
    //           height="40"
    //           fill="currentColor"
    //           class="bi bi-play-fill"
    //           viewBox="0 0 14 18"
    //         >
    //           <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    //         </svg>
    //       </div>
    //     </button>
    //   </Link>
    // ) : (
    //   <button className="btnplay">
    //     <div class="arrow-up">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="16"
    //         height="16"
    //         fill="currentColor"
    //         class="bi bi-play-fill"
    //         viewBox="0 0 16 16"
    //       >
    //         <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    //       </svg>
    //     </div>
    //   </button>
    // )}

                  // {arrId.includes(details.id) ? (
                  //   <div className="butoncitofav">
                  //     <button onClick={handleAddFav} className="buttonFav">
                  //       <svg
                  //         xmlns="http://www.w3.org/2000/svg"
                  //         width="16"
                  //         height="16"
                  //         fill="red"
                  //         className="bi bi-heart-fill"
                  //         viewBox="0 0 16 16"
                  //       >
                  //         <path
                  //           fill-rule="evenodd"
                  //           d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  //         />
                  //       </svg>
                  //     </button>
                  //   </div>
                  // ) : (
                  //   <div className="butoncitofav1">
                  //     <button onClick={handleAddFav} className="buttonNoFav">
                  //       <svg
                  //         xmlns="http://www.w3.org/2000/svg"
                  //         width="16"
                  //         height="16"
                  //         fill="white"
                  //         className="bi bi-heart-fill"
                  //         viewBox="0 0 16 16"
                  //       >
                  //         <path
                  //           fill-rule="evenodd"
                  //           d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  //         />
                  //       </svg>
                  //     </button>
                  //   </div>
                  // )}
    //             </div>
    //           </div>

    //           <label className="backtitle">
    //             <b>Descrption:</b> {details.plot}
    //           </label>
    //         </div>
    //         <div className="infodetail">
    //           <div className="plot">
    //             <div className="titleInfo"></div>
    //             <div className="lessInfo">
    //               <label className="language">
    //                 <b>Director: </b>
    //                 {details.director}{" "}
    //               </label>
    //               <label className="language">
    //                 <b>Year:</b> {details.year}
    //               </label>
    //               <label className="language">
    //                 <b>Genre:</b> {details.genre}
    //               </label>
    //               <label className="language">
    //                 <b>Language:</b> {details.language}
    //               </label>
    //               <label className="language">
    //                 <b>Rating:</b> {details.imdbRating}
    //               </label>
    //               <label className="language">
    //                 <b>Actors:</b> {details.actors}
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

          // {userdb.category === "admin" ? (
          //   <div>
          //     <label class="switch">
          //       <input type="checkbox" onChange={handleBannMovie} />
          //       {details.status === true ? (
          //         <span className="slider"></span>
          //       ) : (
          //         <span className="slider1"></span>
          //       )}
          //     </label>
          //   </div>
          // ) : (
          //   <></>
          // )}
    //     </div>

    //     <div className="card-bodyDi col-auto p-5 justify-content-center btn-detail">
    //       <Link to="/home">
    //         <button
    //           className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
    //           type="shadow-lg p-3 mb-5 bg-body rounded"
    //         >
    //           {" "}
    //           Back{" "}
    //         </button>
    //       </Link>
    //       {/* <a href="#" className="card-link">Another link</a> */}
    //     </div>

    //     <div className="commentform">
    //       {userdb.picture ? (
    //         <ComentForm idParams={parseInt(id)} />
    //       ) : (
    //         <div>
    //           <a onClick={() => loginWithRedirect()}>
    //             <p className="alert">Click on my to login </p>
    //           </a>

    //           <Link to="/">
    //             <p className="alert2">
    //               If you are logged in, complete the information in the profile.
    //             </p>
    //           </Link>
    //         </div>
    //       )}
    //     </div>
    //     <div>
    //       <Allcomments idParams={parseInt(id)} className="allComments" />
    //     </div>

    //     <div className="conteiner-carruzel-home">
    //       <h2 className="textCarruzel">My favorites movies</h2>
    //       <CarruselFav array={moviesCarrusel} />
    //     </div>
    //   </div>
    //   <Footer />
    // </>
  );
}
