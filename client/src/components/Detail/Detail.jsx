import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./detail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { asyncgetDetails, clearDetail } from "../../redux/slice.js";
//import ReactPlayer from 'react-player';
import video from "../../assets/video.mp4";
import ComentForm from "../ComentForm.jsx/ComentForm";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../Footer/Footer"
import NavBar from '../Nav Bar/Navbar'
import Allcomments from "../ComentForm.jsx/AllComments/Allcomments";


export default function Detail() {
  const {isAuthenticated , loginWithRedirect} = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  let { details } = useSelector((store) => store.alldata);
  let userdb = useSelector(store => store.alldata.user)
    

  useEffect(() => {
    dispatch(asyncgetDetails(parseInt(id)));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    
    <div className="detailRender">
      
      <div className="videoBg">
        <video src={video} muted loop autoPlay></video>
      </div>
      <NavBar/>

      <div className="cardStyle">
        <div className="cardDetail">
          <div className="image">
            <img src={details.poster} className="card-img-top" alt="..." />
          </div>
          {/* <div className="player-wrapper">
         <ReactPlayer
          className="react-player"
          url="https://youtu.be/Oy_SER6dfK4"
          controls
        />  
        </div>*/}
          <div className="infodetail">
            <div className="title">
              <p>{details.name}</p>
            </div>
            <label className="language"><b>Director: </b>{details.director} </label>
            <label className="language"><b>Year:</b>  {details.year}</label>
            <label className="language"><b>Genre:</b>  {details.genre}</label>
            <label className="language"><b>Language:</b>  {details.language}</label>
            <label className="language"><b>Rating:</b> {details.imdbRating}</label>
            <label className="language"><b>Actors:</b> {details.actors}</label>
          </div>
        </div>
        <Link to={`/details/${id}/play`}>
          <button
            className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
            type="shadow-lg p-3 mb-5 bg-body rounded"
          >
            {" "}
            Play
            {" "}
          </button>
        </Link>
      </div>
      <div>
        { userdb.picture ?
        <ComentForm idParams={parseInt(id)}/>
        :
        <div> 
          <a onClick={()=>loginWithRedirect()}>
        <p className="alert" >Click on my to login </p>
        </a>
        </div>
}
      </div>
      <div>
         <Allcomments idParams={parseInt(id)}/>
      </div>
      <div className="card-bodyDi col-auto p-5 justify-content-center">
        <Link to="/home">
          <button
            className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
            type="shadow-lg p-3 mb-5 bg-body rounded"
          >
            {" "}
            Back{" "}
          </button>
        </Link>
        {/* <a href="#" className="card-link">Another link</a> */}
      </div>
      <Footer/>
    </div>

  );
}
