import React from "react";
import Logoutbutton from "../User/Logout";
import "./Navbar.css";
import FilteringSorting from "./filtering&sorting/filtering&sorting.jsx";
import Searchbar from "./search bar/search.jsx";
import img from "../../assets/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Route } from "react-router-dom";
import { asyncGetUser } from "../../redux/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Navbar(prop) {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  let userDB = useSelector(state => state.alldata.user)
  let dispatch = useDispatch()

  let categoryGold = "GoldCategory-style"
  let categorySilver = "SilverCatery-style"
  let categoryUser = "UserCategory-style"
  let Unregistered = "Unregistered-style"
//userDB.category==='user'?categoryGold:
  console.log(typeof (userDB) === 'string')// verifica si lo que hay en store.user === 'string
  useEffect(() => {
    dispatch(asyncGetUser(user?.email))
  }, [dispatch, user?.email])


  return (
    <>
      <nav className="navbar-expand-lg">
        <div className="container-fluid">

          <div className="navbar-brand text-light">

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
            <Route path="/home">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Route path='/home'>
                  <FilteringSorting setCurrentPage={prop.setCurrentPage} />
                </Route>
              </ul>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Route path='Home/result'>
                  <FilteringSorting setCurrentPage={prop.setCurrentPage} />
                </Route>
              </ul>
              <Link to={"/home"}>
              <img  className="logoNav" src={img} width="90px" alt="logo" />
              </Link>
            </Route>
            <Route path="/home">
              <Searchbar setCurrentPage={prop.setCurrentPage} />
              {isAuthenticated || userDB.status ? (
                <>
                  <Logoutbutton />
                  <Link to={"/profile"}>
                    <div>
                      <img
                      src={typeof (userDB) === 'string' ? user.picture : userDB.picture}
                      alt="profile"
                      width={"40px"}
                      className={userDB===''?Unregistered 
                      :userDB.category==='user'?categoryUser
                      :userDB.category==='silver'?categorySilver:categoryGold}
                      />
                    </div>
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
            </Route>
      

            <Route path="/details/:id">
            <Link to={"/home"}>
              <img  className="logoNavDetail" src={img} width="90px" alt="logo" />
              </Link>
              <Searchbar className="searchDetail" setCurrentPage={prop.setCurrentPage} />
              {isAuthenticated || userDB.status ? (
                <>
                  <Logoutbutton />
                  <Link to={"/profile"}>
                    <div>
                      <img
                      src={typeof (userDB) === 'string' ? user.picture : userDB.picture}
                      alt="profile"
                      width={"40px"}
                      className={userDB===''?Unregistered 
                      :userDB.category==='user'?categoryUser
                      :userDB.category==='silver'?categorySilver:categoryGold}
                      />
                    </div>
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
            {userDB.id?

            <Route exact path="/">
            <Link to={'/home'}>
            <button
                  type="buttonNavbar"
                  className="btn btn-outline-primary text-light btn-xs btnLogin">
                  Home
                </button>
            </Link>
            <Link to={"/home"}>
              <img className="logoLanding" src={img} width="90px" alt="logo" />
            </Link>
            </Route>
              :<Route exact path="/">
              <button
                type="buttonNavbar"
                className="btn btn-outline-primary text-light btn-xs btnLogin"
                onClick={() => loginWithRedirect()}>
                Login
              </button>
              <Link to={"/home"}>
              <img className="logoLanding" src={img} width="90px" alt="logo" />
            </Link>
            </Route>
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
