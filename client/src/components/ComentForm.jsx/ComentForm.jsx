import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFormComment, asyncCommentById } from "../../redux/slice";
import { useState } from "react";
import "./ComentForm.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import avatar from "../../assets/avatar.png";

export default function ComentForm({ idParams, handleDelete }) {
  let { id } = useParams();
  const dispatch = useDispatch();
  let userdb = useSelector((state) => state.alldata.user);
  let { commentMovie } = useSelector((state) => state.alldata);
  const [input, setInput] = useState({
    coment: "",
  });
  let [suma, setSuma] = useState(0);
  let { commentFromMovies } = useSelector((state) => state.alldata);
  let info = commentFromMovies.filter((e) => userdb.id == e.idUser);



  const handleOnChange = (e) => {

    setInput({
      ...input,
      name: userdb.name,
      idUser: userdb.id,
      email: userdb.email,
      picture: userdb.picture,
      coment: e.target.value,
      status: true,
    });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    console.log(input);
    dispatch(asyncFormComment(input, id));
    dispatch(asyncCommentById(parseInt(idParams)));
    setTimeout(() => {
      dispatch(asyncCommentById(parseInt(idParams)));
    }, 1000);

    setInput({
      coment: "",
    });
  };

  const validate = (data) => {
    let error = {};
    if (data.coment.length < 3 || data.coment.length > 250)
      error.coment = "Complete the field comment";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.coment) return true;
    console.log(error.coment)
  }

  return (
    <div className="container-1">
      <div className="containerinfo">
        <div>
          <img src={userdb.picture} className="imgPefil" alt="fotito" />
        </div>
        {info.length !== 3 ? (
          <form onSubmit={(e) => handleOnsubmit(e)}>
            <div className="textNComent">
              <textarea
                type="message"
                name="comment"
                value={input.coment}
                className="input"
                placeholder="Your review"
                onChange={handleOnChange}
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="icon-btn add-btn"
              disabled={invalidAdd(input)}
            >
              <div className="add-icon"></div>
              <div className="btn-txt">Comment</div>
            </button>
          </form>
        ) : (
          <p className="textlimit">you can only comment 3 times per movie</p>
        )}
      </div>
      <div className="borbo">
        <h5>comments from other users about this movie.</h5>
      </div>
    </div>
  );
}
