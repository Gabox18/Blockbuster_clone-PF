import React, { useState } from "react";
// import Login from "../Log in/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import { useDispatch } from "react-redux";
import "./Landing.css";
import LoginButton from "../User/Login";
import { Link } from "react-router-dom";

export default function Landing() {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  function handleOnChange(e) {
    console.log("input ->", e.target.value);
    setUser(e.target.value);
    setPassword(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault(e);
    dispatch("dispatch del login"); //corregir
    console.log("se mando hadleSubmit!");
  }

  return (
    <div>
      <div className=" wrapper">
        <div className="container-fluid2 col-auto mx-auto">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4 f">Blockbuster Henry</h3>

                  <div>
                    <LoginButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
