import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import LoginButton from "./Login";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynSetUser } from "../../redux/slice.js";
import Navbar from "../Nav Bar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Profile.css";

const Profile = () => {
  const { user,isAuthenticated } = useAuth0();
  let userBD = useSelector((state) => state.alldata.user);
  const dispatch = useDispatch();

  let date = new Date();
  let currentDate = date.toISOString().split('T')[0]

  const validate = (data) => {
    let error = {};
    if (!data.date) error.date = "Complete the field date";
    return error;
  };

  const [input, setInput] = useState({
    name: user?.given_name,
    lastname: user?.family_name,
    nickname: user?.nickname,
    picture : user?.picture,
    email : user?.email,
    date: "",
    status: true,
    category: "user",
  });

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    let error = validate(input)
       if(Object.keys(error).length !== 0){
        alert("Complete the required field");
       }else{
        dispatch(asynSetUser(input));
        alert("added profile info");
       }
    
  };


  return (
    <div>
      {isAuthenticated || userBD.status? (
        <section className="profileBg-dark">
          <Navbar/>
          <div className="contain-profile">  
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-10 col-xl-4">
              <div className="small-profile">
                <div className="card-profile">
                  <div className="card-profile text-center">
                    <div className="mt-3 mb-9" >
                      <img src={user?.picture} className="img-profile" alt="perfil-phot"/>
                    </div>
                    <h4 className="name-profile">{userBD?.name}</h4>
                    <p className="nick-profile"> Nickname:<span className="mx-2">{user?.nickname}</span>{" "}</p>
                    <p className="email-profile">Email : {user?.email}</p>
      
                    {
                    !userBD.category
                          ? (<div class="div-complete-profile">
                              <h4 className="h4-complete-profile">complete your information</h4>
                              <p className="Birth-profile">Date of Birth</p>
                              <form onSubmit={handleOnsubmit}>
                                <input
                                  type="date"
                                  name="date"
                                  className="input-complete"
                                  placeholder="Date of Birth"
                                  onChange={handleOnChange}
                                  max={currentDate}
                                />
                                <button type="submit" className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg completeProfile">Complete profile</button>
                              </form>
                          </div>)
                      : <Link to={"/infoprofile"}>
                      <div className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg updateProfile">
                        Update profile   
                      </div>
                    </Link>
                    }
                  </div>
                  </div>
                  <Link to={"/home"}>
                    <div className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg">
                      Home
                    </div>
                  </Link>
              </div>
            </div>
            </div>
          </div>
          <Footer/>
        </section>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Profile;
