import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  asyncCommentById,
  asyncDeleteComment,
  asyncEditComment,
} from "../../../redux/slice";
import { useSelector } from "react-redux";
import "./Comment.css";
import tachito from "../../../assets/tachito.png";
import pencil from "../../../assets/pencil.png";

export default function Comment({
  name,
  id,
  movieId,
  picture,
  coment,
  idUser,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    id: "",
    coment: "",
  });
  const [edit, setEdit] = useState({
    push: false,
  });
  const [newComm, setNewComm] = useState({
    id: id,
    coment: "",
  });
  let { user } = useSelector((state) => state.alldata);

  

  async function handleDelete(id) {
    dispatch(asyncDeleteComment(id, movieId));
    setTimeout(() => {
      dispatch(asyncCommentById(movieId));
    }, 1000);
    
  }

  async function handleEdit() {
    setEdit({
      push: true,
    });
  }
  async function HandleOnChange(e) {
    setNewComm({
      ...newComm,
      coment: e.target.value,
    });
  
  }
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(asyncEditComment(newComm));

    setTimeout(() => {
      dispatch(asyncCommentById(movieId));
    }, 1000);

    setNewComm({
      coment: "",
    });
    setEdit({
      push: false,
    });
  }

  return (
    <div>
      <div className="info-comment">
        <div className="info-profile">
          <div>
            <img src={picture} alt="fotito" className="fotitox" />

            <h3 className="nameUs">{name}</h3>
          </div>
        </div>
        {edit.push === false ? (
          <div className="comment">
            <p className="textComent">{coment}</p>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <textarea
                  type="text"
                  name="comment"
                  className="textInput"
                  placeholder={coment}
                  onChange={HandleOnChange}
                />
              </div>
              <button type="submit" className="icon-btn add-btn">
                <div className="add-icon"></div>
                <div className="btn-txt">Comment</div>
              </button>
            </form>
          </div>
        )}

        <div>
          {user.id == idUser ? (
            <div className="buttonsComents">
              <button className="botonD" onClick={() => handleEdit(input)}>
                <img className="imgPencil" src={pencil} alt="pencil" />
              </button>
            </div>
          ) : (
            <></>
          )}
          {user.id == idUser || user.category === "admin" ? (
            <div>
              <button className="botonD" onClick={() => handleDelete(id)}>
                <img className="imgTacho" src={tachito} alt="tachito" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
