import React from "react";
import "./Allcomments.css";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";
import { useParams } from "react-router-dom";
import { asyncCommentById } from "../../../redux/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Allcomments({idParams}) {
  let { commentFromMovies } = useSelector((state) => state.alldata);
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncCommentById(idParams));
  }, [ dispatch,idParams]);
  
  console.log(commentFromMovies,"commentFromMovies")
  return (
    <div className="container-principal">
      <div className="container-comment">
        {Array.isArray(commentFromMovies)
        ?commentFromMovies.map(e => (
          <Comment
            className='comment'
            id={e.id}
            name={e.name}
            movieId={e.movieId}
            picture={e.picture}
            coment={e.coment}
            idUser ={e.idUser}

          />
        )):<></>}
      
      </div>
    </div>
  );
}
