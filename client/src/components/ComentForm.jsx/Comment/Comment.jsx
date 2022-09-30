import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncDeleteComment, asyncEditComment } from "../../../redux/slice";
import { useSelector } from "react-redux";
import "./Comment.css";
import { useParams } from "react-router-dom";
import avatar from "../../../assets/avatar.png";
import tachito from "../../../assets/tachito.png";
import pencil from "../../../assets/pencil.png";

export default function Comment({
  name,
  idComment,
  picture,
  movieId,
  coment,
  idUser,
}) {
  const [input, setInput] = useState({
    id: "",
    coment: "",
  });

  let edit = false;
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.alldata);
  let { id } = useParams();

  async function handleDelete(idComment) {
    dispatch(asyncDeleteComment(idComment, parseInt(id)));
    console.log(id, "movie id");
    console.log(idComment, "comment id");
  }

  async function handleEdit({id, coment}) {
    dispatch(asyncEditComment(idComment, parseInt(id)));
    console.log(id, "movie id");
    console.log(idComment, "comment id");
  }

  return (
    <div>
      <div className="info-comment">
        <div className="info-profile">
          <div>
            {picture ? (
              <img src={picture} alt="fotito" className="fotitox" />
            ) : (
              <img src={avatar} alt="fotito" className="fotitox" />
            )}
            <h3 className="nameUs">{name}</h3>
          </div>
        </div>

        <div className="comment">
          <p className="textComent">{coment}</p>
        </div>

        {/* <div>
          <input type="text" name="comment"value={info.coment} className="textInput" />
         </div> */}
        <div>
          {user.id == idUser ? (
            <div className="buttonsComents">
              <button
                className="botonD"
                onClick={() => handleDelete(idComment)}
              >
                <img className="imgTacho" src={tachito} alt="tachito" />
              </button>
              <button className="botonD" onClick={() => handleEdit(input)}>
                <img className="imgPencil" src={pencil} alt="pencil" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {/* {edit ? <button >Submit</button>:
        <button onClick={handleOnEdit}>Edit</button>} */}
      </div>
    </div>
  );
}
