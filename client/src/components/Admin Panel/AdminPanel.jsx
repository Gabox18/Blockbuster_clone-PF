import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//funciones admin
import FunctionCreateAdmin from "./Function Admin/Function CreateAdmin/FunctionCreateAdmin";
import FunctionBannUser from "./Function Admin/FunctionBannUser/FunctionBannUser";
import FunctionAddMovie from "./Function Admin/Function AddMovie/FunctionAddMovie.jsx";
import "./adminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import FunctionDeleteMovie from "./Function Admin/Function DeleteMovie/FunctionDeleteMovie";

function AdminPanel() {
  const allUsers = useSelector((state) => state.user);
  let [funct, setFunct] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light blue fixed-top">
        <button id="sidebarCollapse" className="btn navbar-btn">
          <i className="fas fa-lg fa-bars"></i>
        </button>
        <a className="navbar-brand" href="">
          <h3 id="logo">Admin Panel</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div className="containerAdmin">
        <div className="menuAdmin">
          <li className="menu-item" id="profile">
            <a href="#profile" className="linkAdmin text-dark">
              <i className="far fa-user"></i>
              User
            </a>
            <div className="menu-item__sub">
              <button
                className="linkAdmin"
                onClick={() => setFunct("userFunctions")}
              >
                <i className="fas fa-clipboard"></i> User functions
              </button>
            </div>
          </li>
          <li className="menu-item" id="messages">
            <a href="#messages" className="linkAdmin text-dark">
              <i className="far fa-envelope"></i>
              Moovie
            </a>
            <div className="menu-item__sub">
              <button
                className="linkAdmin"
                onClick={() => setFunct("createmovie")}
              >
                <i className="fas fa-clipboard"></i>New Movie
              </button>
              <button className="linkAdmin" onClick={() => setFunct('deletemovie')}>
              <i className="fas fa-clipboard"></i>Delete Movie
            </button>
            </div>
          </li>
          <li className="menu-item" id="settings">
            <a href="#settings" className="linkAdmin text-dark">
              <i className="fas fa-cog"></i>
              Settings
            </a>
          </li>
          <li className="menu-item">
            {/* <a href="#" class="btn">
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </a> */}
            <Link className="text-dark" to={"/home"}>
              Home
            </Link>
          </li>
        </div>
        <div className="functionAdmin col-10">
          {funct === "createAdmin" ? (
            <FunctionCreateAdmin />
          ) : funct === "userFunctions" ? (
            <FunctionBannUser />
          ) : funct === "createmovie" ? (
            <FunctionAddMovie />
          ) : funct === "deletemovie" ? (
            <FunctionDeleteMovie/>
          ) : <></>}
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
