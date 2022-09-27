import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { asyncallMovies, asynSetUser } from "../../redux/slice";
import './Form.css'



export default function Form() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  console.log(user)
  const [input, setInput] = useState({
    name: user?.given_name,
    lastname: user?.family_name,
    nickname: user?.nickname,
    picture : user.picture,
    email : user.email,
    date: "",
    status: true,
    category: "user",
  });
  
  const validate = (data) => {
    let error = {};
    if (data.name?.length < 3 || data.name?.length > 12)
      error.lastname = "invalid name";
    if (data.lastname?.length < 3 || data.lastname?.length > 12)
      error.lastname = "invalid lastname";
    if (!data.date) error.date = "Complete the field date";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.name || error.lastname || error.date  )
      return true;
  }

  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);

  const handleOnChange = (e) => {
    console.log(input,'onchange');
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    console.log(input, 'sutmit');
    setInput({
      ...input,
      picture : user.picture,
      email : user.email,
      status: true,
      category: "user",
      
    });
    dispatch(asynSetUser(input));
    alert("added profile info");
    setInput({
      name: "",
      nickname: "",
      lastname: "",
      date: "",
    });
  };

  return (
    <div>
      <div className="container-general">
        <div className=" ">
          <div className="">
            <div className="cards-form">
              {isAuthenticated ? (
                <div className="img">
                  <img
                    src={user.picture}
                    className=""
                    alt="poster" />
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
                      <p className="category">Name</p>
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        className="textInput"
                        placeholder="name"
                        onChange={handleOnChange}
                        autoFocus
                      />
                    </div>

                  </div>
                  <p className="category">LastName</p>
                  <div className="form-group">
                    <div class="textInputWrapper">
                      <input
                        type="text"
                        name="lastname"
                        value={input.lastname}
                        className="textInput"
                        placeholder="lastname"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>


                  <p className="category">Nickname</p>
                  <div className="form-group">
                    <div class="textInputWrapper">
                      <input
                        type="text"
                        name="nickname"
                        value={input.nickname}
                        className="textInput"
                        placeholder="nickname"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>


                  <div className="form-group">
                    <div class="textInputWrapper">
                      <p className="category">Date</p>
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
    </div>
  );
}