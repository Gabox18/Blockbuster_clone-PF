import React, { useState } from "react";
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
import Cookies from 'universal-cookie';
import "./Navbar.css";

function Navbar(prop) {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  let userDB = useSelector((state) => state.alldata.user);
  let dispatch = useDispatch();
  const cookies = new Cookies();
  if(isAuthenticated !== cookies.get('isAuthenticated')) cookies.set('isAuthenticated', isAuthenticated,{ path: '/' })
  let cookiesLogin = cookies.get('isAuthenticated')==="true"? true:false
  let categoryGold = "GoldCategory-style";
  let categorySilver = "SilverCatery-style";
  let categoryUser = "UserCategory-style";
  let Unregistered = "Unregistered-style";



  ///-------------------->
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  useEffect(() => {
    dispatch(asyncGetUser(user?.email));
  }, [dispatch, user?.email]);
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
      <Link to={"/home"}>
        BlockBuster
      </Link> 
      </a>
      <ul className={active}>
        {/* Profile */}
        <li className="nav__item">
          <Route path="/">
            {isAuthenticated || userDB.status ? (
              <>
                <div className="conteinerProfile">
                  <Link to={"/profile"}>
                    <div>
                      <img
                        src={
                          typeof userDB === "string"
                            ? user.picture
                            : userDB.picture
                        }
                        alt="profile"
                        width={"40px"}
                        className={
                          userDB === ""
                            ? Unregistered
                            : userDB.category === "user"
                            ? categoryUser
                            : userDB.category === "silver"
                            ? categorySilver
                            : categoryGold
                        }
                      />
                    </div>
                  </Link>
                  <Logoutbutton />
                </div>
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
        </li>
        {/* Payment */}
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Route  path="/home">
              {
                userDB.category === 'user' ?
                <Link to={"/"}>
                  <button
                    type="buttonNavbar"
                    className="btn btn-outline-primary text-light btn-xs btnLogin"
                  >
                    Payment
                  </button>                
                </Link> :
                <></>
              }
            </Route>
          </a>
        </li>
        {/* SearchBar */}
        <li className="nav__item">
          <a href="#" className="nav__link">
            <Route path="/home">
              <Searchbar setCurrentPage={prop.setCurrentPage} />
            </Route>
          </a>
        </li>
        {/* filter */}
        <li className="nav__item">
          <Route path="/home">
            <a href="#" className="nav__link">
              <FilteringSorting setCurrentPage={prop.setCurrentPage} />
            </a>
          </Route>
        </li>

      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;