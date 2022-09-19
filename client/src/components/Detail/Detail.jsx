import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './detail.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { asyncgetDetails, clearDetail } from '../../redux/slice.js';
import ReactPlayer from 'react-player';



export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let { details } = useSelector(store => store.alldata);

  useEffect(() => {
    dispatch(asyncgetDetails(id))
    console.log(details)
    return () => {
      dispatch(clearDetail())
    }
  }, [dispatch])

  return (
    <>
    <div className="detailRender">
      <div className="card cardStyle  mx-auto" >
        <img src={details[0]?.Poster }  className="card-img-top" alt="..." />
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/Oy_SER6dfK4'
            controls
          />
        </div> 
        <br></br><h2 className="card-title"> {details[0]?.Title}</h2> 
         <p className="card-text">Actors: {details[0]?.Actors && details[0]?.Actors}</p>
        <div className="column-detail">
        <ul >
          <div className='column-left'>
          <li className="list-group-item"><p>Year: <b> {details[0]?.Year}</b></p></li>
          <li className="list-group-item"><p>Genre: <b>{details[0]?.Genre}</b></p></li>
          <div>
          <li className="list-group-item"><p>Director: <b>{details[0]?.Director}</b></p></li>
          <li className="list-group-item"><p>Language: <b>{details[0]?.Language}</b></p></li>
          </div>
          </div>
          <div className='column-right'>
          <li className="list-group-item">
            <h2>
              Ratings:{" "}
              {details[0]?.Ratings.length &&
                details[0]?.Ratings.map((e, i) => {
                  return <p key={i}>{e.Value}</p>;
                })}
            </h2>
          </li>
          </div>
        </ul>
        </div>
        <div className="card-body">
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
      </div>
    </>
  );
}
