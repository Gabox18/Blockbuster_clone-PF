import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { asyncallMovies, asyncFormInfo } from "../../redux/slice";
import LoginButton from "../User/Login";
import './Form.css'

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
    <div className="container-form p-4">
      <div className="row-form">
        <div className="col-md-6 offset-md-3">
          <div className="cards-form">
            {isAuthenticated ? (
              <div className="img"> 
              <img
                src={user.picture}
                className="rounded-circle img-fluid"
              />
              </div>
            ) : (
              <p></p>
            )}
            {isAuthenticated ? (
              user.given_name ? (
                <div className="name">
                <h3>Welcome {user.given_name}!</h3>
                </div>
              ) : (
                <div className="name">
                <h3> Welcome{user.nickname}!</h3>
                </div>
              )
            ) : (
              <p></p>
            )}
            <div>
            <p>Complete your profile to have a better experience!</p>
            </div>
            <div className="card-bodysform">
              <form action="" onSubmit={handleOnsubmit}>
                <div className="form-group">
                <div class="textInputWrapper">
                <input
                    type="text"
                    name="name"
                    className="textInput"
                    placeholder="name"
                    onChange={handleOnChange}
                    autoFocus
                  />
</div>
                  
                </div>
                
                <div className="form-group">
                <div class="textInputWrapper">
                  <input
                    type="text"
                    name="lastname"
                    className="textInput"
                    placeholder="lastname"
                    onChange={handleOnChange}
                  />
                   </div>
                </div>
                <div className="form-group">
                <div class="textInputWrapper">
                  <input
                    type="date"
                    name="date"
                    className="textInput"
                    placeholder="Date of Birth"
                    onChange={handleOnChange}
                    autoFocus
                  />
                </div>
                </div>
                <div className="form-group">
                <div >
                  <select name="genre" onChange={handleSelectChange} className='textInputWrapper'>
                    <option className="textInput">Select a genre</option>
                    <option className="textInput"name="genre">Male</option>
                    <option className="textInput"name="genre">Female</option>
                  </select>
                </div>
                </div>
                <div className="form-group">
                <div class="textInputWrapper">
                  <input
                    type="message"
                    className="textInput"
                    name="text"
                    placeholder="Profile information"
                    onChange={handleOnChange}
                  />
                </div>
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
