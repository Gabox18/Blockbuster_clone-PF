import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFormComment } from "../../redux/slice";
import { useState } from "react";
import "./ComentForm.css";

export default function ComentForm() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  let infoComments = useSelector((state) => state.commentUsers);
  let comment = "";
    console.log(infoComments,"averga")

  const [input, setInput] = useState({
    comment: "",
    commentfull: "",
  });
  let commentary = input.commentfull;

  const handleOnChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    console.log(input);
    dispatch(asyncFormComment(input));
    console.log(comment, "commentsadas");
    setInput({
      ...input,
      commentfull: input.comment,
    });
  };

  const validate = (data) => {
    let error = {};
    if (data.comment.length < 3 || data.comment.length > 50)
      error.comment = "Complete the field comment";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.comment) return true;
  }
  console.log(commentary, "antes del render");
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
            {commentary.length < 1 ? (
              <form onSubmit={(e) => handleOnsubmit(e)}>
                <div>
                  <div className="textInputWrapper">
                    <input
                      type="message"
                      name="comment"
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
            ) : (
              <div className="containerComments">
                <div>
                  <p className="inputcomment">My comment: {input.comment}</p>
                </div>
              </div>
            )}
          </div>
          <div className="borbo">
            <h5>comments from other users about this movie.</h5>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
