import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

//funciones admin
import FunctionDeleteUser from './Function Admin/Function Delete User/FunctionDeleteUser';
import FunctionCreateAdmin from './Function Admin/Function CreateAdmin/FunctionCreateAdmin';
import FunctionBannUser from "./Function Admin/FunctionBannUser/FunctionBannUser";
import FunctionAddMovie from './Function Admin/Function AddMovie/FunctionAddMovie.jsx'
import './adminPanel.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FunctionDeleteMovie from "./Function Admin/Function DeleteMovie/FunctionDeleteMovie.jsx";







function AdminPanel(){

  let [funct, setFunct] = useState('');

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light blue fixed-top">
      <button id="sidebarCollapse" className="btn navbar-btn">
        <i className="fas fa-lg fa-bars"></i>
      </button>
      <a className="navbar-brand" href="">
        <h3 id="logo">Admin Panel</h3>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" id="link" href="#">
            <i className="fas fa-sign-out-alt"></i>
            LogOut<span className="sr-only">(current) </span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="link" href="#">
            <i className="fas fa-id-card"></i>Contact Us</a>
          </li>
        </ul>
      </div> */}
    </nav>


    <div className="containerAdmin">
      <div className="menuAdmin">
        <li className="menu-item" id="profile">
          <a href="#profile" className="linkAdmin text-dark">
            <i className="far fa-user"></i>
            User
          </a>
          <div className="menu-item__sub">
            <button className="linkAdmin" onClick={() => setFunct('bannUser')}>
              <i className="fas fa-clipboard"></i>Bann User
            </button>
            <button className="linkAdmin" onClick={() => setFunct('deleteUser')}>
              <i className="fas fa-clipboard"></i>Delete User
            </button>
          </div>
        </li>
        <li className="menu-item" id="messages">
          <a href="#messages" className="linkAdmin text-dark">
            <i className="far fa-envelope"></i>
            Moovie
          </a>
          <div className="menu-item__sub">
            <button className="linkAdmin" onClick={() => setFunct('createmovie')}>
              <i className="fas fa-clipboard"></i>New Movie
            </button>
            <button className="linkAdmin" onClick={() => setFunct('deletemovie')}>
              <i className="fas fa-clipboard"></i>Delete Movie
            </button>
            {/* <a href="#">Delete Movie</a>             */}
          </div>
        </li>
        <li className="menu-item" id="settings">
          <a href="#settings" className="linkAdmin text-dark">
            <i className="fas fa-cog"></i>
            Settings
          </a>
          <div className="menu-item__sub">
            <a href="#">All User</a>
            <a href="#">Delete Admin</a>
            <button className="linkAdmin" onClick={() => setFunct('createAdmin')}>
              <i className="fas fa-clipboard"></i>Create Admin
            </button>
          </div>
        </li>
        <li className="menu-item">
          {/* <a href="#" class="btn">
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </a> */}
          <Link className="text-dark" to={'/home'}>Home</Link>
        </li>
      </div>
      <div className="functionAdmin col-10">
        {
          funct === 'deleteUser' ? <FunctionDeleteUser /> : 
          funct === 'createAdmin' ? <FunctionCreateAdmin  /> : 
          funct === 'bannUser' ? <FunctionBannUser />  :
          funct === 'createmovie'? <FunctionAddMovie/> : 
          funct === 'deletemovie'? <FunctionDeleteMovie/> : <></>
  
        }
      </div>
    </div>


    </>
  )
}

export default AdminPanel;