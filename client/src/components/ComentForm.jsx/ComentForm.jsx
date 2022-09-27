import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFormComment } from "../../redux/slice";
import { useState } from "react";
import "./ComentForm.css";
import Allcomments  from "./AllComments/Allcomments";
import { useParams } from "react-router-dom";

export default function ComentForm() {
  const { user, isAuthenticated } = useAuth0();
  let { id } = useParams();
  console.log(id,"idmovie")
  const dispatch = useDispatch();
  // let infoComments = useSelector((state) => state.commentFromMovies);
  let comment = "";


  const [input, setInput] = useState({
    coment: "",
  });

  const handleOnChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      name: user.name,
      // idUser: user.nickname,
      // email: user.email,
      picture: user.picture,
      coment: e.target.value,
      status: true,
    });
  };
  // {
  //   "name": "jejejeejej",
  //   "coment": "aca mollo",
  //   "picture": "string",
  //   "status": true
  // }

  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    console.log(input);
    dispatch(asyncFormComment(input, id));
    setInput({
      coment: "",
    });
  };

  const validate = (data) => {
    let error = {};
    if (data.coment.length < 3 || data.coment.length > 50)
      error.coment = "Complete the field comment";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.coment) return true;
  }
  return (
    <div className="container-1">
      <div className="container-2">
        <div className="containerinfo">
          <div>
            {isAuthenticated ? (
              <div className="img">
                <img src={user.picture} className="rounded-circle img-fluid" />
              </div>
            ) : (
              <p></p>
            )}
            {isAuthenticated ? (
              user.given_name ? (
                <div className="name">
                  <h3>
                    {" "}
                    {user.given_name.toUpperCase()} , your comment of this
                    movie!
                  </h3>
                </div>
              ) : (
                <div className="name">
                  <h3> {user.nickname}, your comment of this movie!</h3>
                </div>
              )
            ) : (
              <p></p>
            )}
            <form onSubmit={(e) => handleOnsubmit(e)}>
              <div>
                <div className="textInputWrapper">
                  <input
                    type="message"
                    name="comment"
                    value={input.coment}
                    className="textInput"
                    placeholder="comment of the movie"
                    onChange={handleOnChange}
                    autoFocus
                  />
                </div>
                <div>
                  <div>
                    <button type="submit" disabled={invalidAdd(input)}>
                      {" "}
                      Add comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="borbo">
            <h5>comments from other users about this movie.</h5>
            <div>
              <Allcomments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
