import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {  asyncDeleteComment } from "../../../redux/slice";
import { useSelector } from "react-redux";
import './Comment.css'
import { useParams } from "react-router-dom";

export default function Comment({name, idComment, picture, movieId, coment , idUser}) {
  const [input, setInput] = useState({
    id: "",
    coment: "",
  });
  
  let edit = false;
  const dispatch = useDispatch();
  let {user} = useSelector((state)=>state.alldata)
  let {id} = useParams()
  

  
        

  // useEffect(() => {
  //   dispatch(asyncDeleteComment(idComment,movieId))
  // }, [dispatch]);

  // function handleOnEdit(e) {
  //   edit = true;
  //   setInput({
  //     ...input,
  //     id: commentFromMovies.id,
  //     coment: e.target.value,
  //   });
  // }
  // function handleOnChange(e) {
  //   setInput({
  //     ...input,
  //     coment: e.target.value,
  //     id: commentFromMovies.id,
  //   });
  // }
  async function handleDelete(idComment) { 
    dispatch(asyncDeleteComment(idComment,parseInt(id)))
    console.log(id,"movie id")
    console.log(idComment,"comment id")
  }
  // function handleOnSubmit(e) {
  //   e.preventDefault(e);
  //   setInput({
  //     ...input,
  //   });
  // }
  return (
    <div>
      <div className="info-comment">
        <div className="info-profile">
          <div>
            <img src={picture} alt="fotito"/>
          <h3>{name}</h3>
          </div>
        </div>

        <div className="comment">
          <p>{coment}</p>
        </div>

        {/* <div>
          <input type="text" name="comment"value={info.coment} className="textInput" />
         </div> */}
      </div>
      <div>
        {/* {edit ? <button >Submit</button>:
        <button onClick={handleOnEdit}>Edit</button>} */}
       {
       user.id == idUser 
        ?<button onClick={()=>handleDelete(idComment)}>Delete</button>
        :<></>
       }
      </div>
    </div>
  );
}
