import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { asyncFormComment } from "../../redux/slice";
import { useState } from "react";
import './CommentForm.css'

export default function ComentForm() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    comment: "",
  });

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
    alert("added comment");
    setInput({
        name:"",
        comment: "",
    });
  };

  const validate = (data) => {
    let error = {};
    if (data.comment.length < 3 || data.comment.length > 50)
      error.comment = "Complete the field comment";
      if (data.name.length < 3 || data.name.length > 15)
      error.name = "Complete the field name"
      return error;
  }

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.comment || error.name )
      return true;
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
                  <h3> {user.given_name}, leave a comment!</h3>
                </div>
              ) : (
                <div className="name">
                  <h3> {user.nickname}, leave a comment!</h3>
                </div>
              )
            ) : (
              <p></p>
            )}
            <form onSubmit={(e)=> handleOnsubmit(e)}>
              <div>
                <div>
                <input
                    type="text"
                    name="name"
                    className="textInput"
                    placeholder="name"
                    onChange={handleOnChange}
                    autoFocus
                  />
                </div>
                <div>
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
                    <button type="submit" disabled={invalidAdd(input)}> Add comment</button>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}