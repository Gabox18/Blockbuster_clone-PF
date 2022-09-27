import React from "react";
import { Link } from 'react-router-dom';
import './adminPanel.css';

function AdminPanel(){

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

    <div className="wrapper fixed-left">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3><i className="fas fa-user"></i>Username</h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link href="" className="linkAdmin">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link href="" className="linkAdmin">
              <i className="fas fa-clipboard"></i>Actions
            </Link>
          </li>
          <li>
            <Link href="" className="linkAdmin">
              <i className="fas fa-user-cog"></i>User
            </Link>
          </li>
          <li>
            <Link href="" className="linkAdmin">
              <i className="fas fa-hands-helping"></i>Seting
            </Link>
          </li>
          <li>
            <Link href="" className="linkAdmin">
              <i className="fas fa-info"></i>About
            </Link>
          </li>
        </ul>
      </nav>

      <div id="content">

      </div>

    </div>


    </>
  )
}

export default AdminPanel;