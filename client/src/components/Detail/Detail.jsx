import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './detail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { asyncgetDetails, clearDetail } from '../../redux/slice.js';
//import ReactPlayer from 'react-player';
import video from '../../assets/video.mp4';
import ComentForm from '../ComentForm.jsx/ComentForm';



export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { details} = useSelector(store => store.alldata);

  useEffect(() => {
    dispatch(asyncgetDetails(parseInt(id)))
    return () => {
      dispatch(clearDetail())
    }
  }, [dispatch, id])
 
  return (
    <div className="detailRender">
      <div className="videoBg">
        <video src={video} muted loop autoPlay></video>
      </div>
      <div className="cardStyle">
        <img src={details.poster} className="card-img-top" alt="..." />
        <div className="player-wrapper">
          {/* <ReactPlayer
            className="react-player"
            url="https://youtu.be/Oy_SER6dfK4"
            controls
          /> */}
        </div>
     
      <div className='title'>
        <p>{details.name}</p>
      </div>
      <div className='director'> 
        <p>Director : {details.director} </p>
      </div>
      <div className='year'>
      <p> Year : {details.year}</p>
      </div>
      <div className='genre'>
      <p>Genre : {details.genre}</p>
      </div>
      <div className='language'>
        <p>Language : {details.language}</p>
      </div>
      <div className='rating'>
      <p>Rating:{details.imdbRating}</p>
      </div>
      <div className='actors'>
      <p>Actors : {details.actors}</p>
      </div>
      </div>
      <Link to='/play'>
      <div>
      <button>
    P L A Y
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
      </div>
      </Link>
      {/* <div className="cardDetail">
        <p>
          <span>{details[0]?.Title}</span>
        </p>
        <p>
          <span>Actors: {details[0]?.Actors && details[0]?.Actors}</span>
        </p>
        <p>
          <span>Year: {details[0]?.Year}</span>
        </p>
        <p>
          <span>Genre: {details[0]?.Genre}</span>
        </p>
        <p>
          <span>Director: {details[0]?.Director}</span>
        </p>
        <p>
          <span>Language: {details[0]?.Language}</span>
        </p>
        <p>
          <span>
            Ratings:{" "}
            {details[0]?.Ratings.length &&
              details[0]?.Ratings.map((e, i) => {
                return <p key={i}>{e.Value}</p>;
              })}
          </span>
        </p>
      </div> */}\
      <div>
      <ComentForm/>
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
    </div>
  );
}
