import React from "react";
import Logoutbutton from "../User/Logout";
import "./Navbar.css";
import FilteringSorting from "./filtering&sorting/filtering&sorting.jsx";
import Searchbar from "./search bar/search.jsx";
import img from "../../assets/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Route , Route} from "react-router-dom";
import { asyncGetUser } from "../../redux/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function Navbar(prop) {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    let userDB = useSelector(state=>state.alldata.user)
    let dispatch = useDispatch()
    console.log(typeof(userDB)==='string')// verifica si lo que hay en store.user === 'string
    useEffect (()=>{
        dispatch(asyncGetUser(user?.email))
    },[dispatch, user?.email])

  return (
    <>
      <nav className="navbarFix navbar bg-dark navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand text-light">
          
            <Link to={"/home"}>
              <img src={img} width="60px" alt="logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler navbarButon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Route  path="/home"> 

                {/*para que no se rendererise los filtrados en el componete de profile */}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Route  path='/home'>
              <FilteringSorting setCurrentPage={prop.setCurrentPage} />
                        </Route>
            </ul>
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                        <Route  path='Home/result'>
                            <FilteringSorting setCurrentPage={prop.setCurrentPage}/> 
                        </Route>
                        </ul>
                       
                 {/*para que no se rendererise los filtrados en el componete de profile */}

          </Route>
            <Route path="/home">
              <Searchbar setCurrentPage={prop.setCurrentPage} />
            </Route>
            <Route strict path="/home/">
            
          </Route >
          <Route path="/home">
            {isAuthenticated ? (
              <>
                <Logoutbutton />
                <Link to={"/profile"}>
                  <img
                    src={typeof(userDB)==='string'?user.picture:userDB.picture}
                    alt="profile"
                    width={"40px"}
                    className="imgPerfil"
                  />
                </Link>
              </>
            ) : (
              <button
                type="buttonNavbar"
                className="btn btn-outline-primary text-light btn-xs btnLogin"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
            </Route >
            <Route exact path="/">
            <button
                type="buttonNavbar"
                className="btn btn-outline-primary text-light btn-xs btnLogin"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </Route>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
