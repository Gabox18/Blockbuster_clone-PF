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
      <div className="card cardStyle col-auto mx-auto" >
        <img src={details[0]?.Poster} className="card-img-top" alt="..." />
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            controls
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Title: {details[0]?.Title}</h2>
          <p className="card-text">Actors: {details[0]?.Actors && details[0]?.Actors}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Year: {details[0]?.Year}</li>
          <li className="list-group-item">Genre: {details[0]?.Genre}</li>
          <li className="list-group-item">Director: {details[0]?.Director}</li>
          <li className="list-group-item">Language: {details[0]?.Language} km2</li>
          <li className="list-group-item">
            <h2>
              Ratings:{" "}
              {details[0]?.Ratings.length &&
                details[0]?.Ratings.map((e, i) => {
                  return <p key={i}>{e.Value}</p>;
                })}
            </h2>
          </li>
        </ul>
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
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
      </div>
    </>
  );
}
