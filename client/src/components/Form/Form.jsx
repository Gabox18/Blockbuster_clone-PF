import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { asyncallMovies, asyncFormInfo } from "../../redux/slice";
import LoginButton from "../User/Login";

export default function Form() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    nickname: "",
    date: "",
    genre: "",
    text: "",
    status: true,
    category: "user",
  });
  // const [errorForm, setErrorF] = useState({});

  const validate = (data) => {
    let error = {};
    if (data.name.length < 3 || data.name.length > 12)
      error.lastname = "Complete the field name";
    if (data.lastname.length < 3 || data.lastname.length > 12)
      error.lastname = "Complete the field lastname";
    if (!data.date) error.date = "Complete the field date";
    if (!data.genre) error.genre = "Complete the field genre";
    if (!data.text || data.text.length < 3)
      error.text = "Complete the field text";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.name || error.lastname || error.date || error.genre || error.text)
      return true;
  }

  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);

  const handleOnChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      genre: e.target.value,
    });
  };
  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    console.log(input);
    setInput({
      ...input,
      status: true,
      category: "user",
    });
    dispatch(asyncFormInfo(input));
    alert("added profile info");
    setInput({
      lastname: "",
      date: "",
      genre: "",
      text: "",
    });
  };
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="cards">
            {isAuthenticated ? (
              <img
                src={user.picture}
                className="rounded-circle img-fluid"
              />
            ) : (
              <p></p>
            )}
            {isAuthenticated ? (
              user.given_name ? (
                <h3>Welcome {user.given_name}!</h3>
              ) : (
                <h3> Welcome{user.nickname}!</h3>
              )
            ) : (
              <p></p>
            )}

            <p>Complete your profile to have a better experience!</p>
            <div className="card-bodys">
              <form action="" onSubmit={handleOnsubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="name"
                    onChange={handleOnChange}
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    placeholder="lastname"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    placeholder="Date of Birth"
                    onChange={handleOnChange}
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <select name="genre" onChange={handleSelectChange}>
                    <option>Select a genre</option>
                    <option name="genre">Male</option>
                    <option name="genre">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="message"
                    className="form-control"
                    name="text"
                    placeholder="Profile information"
                    onChange={handleOnChange}
                  />
                </div>
                <div>
                  <button type="submit" disabled={invalidAdd(input)}>
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
