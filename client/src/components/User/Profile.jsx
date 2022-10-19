import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import LoginButton from "./Login";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynSetUser } from "../../redux/slice.js";
import Navbar from "../Nav Bar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import pencil from "../../assets/pencil.png";
import submit from "../../assets/iconSubmit.png"
import "./Profile.css";
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Complete the required field.',
          footer: '<a href="">Why do I have this issue?</a>'
        })
       }else{
        dispatch(asynSetUser(input));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'added profile info',
          showConfirmButton: false,
          timer: 1500
        })
       }
    
  };


  return (
    <div>
      {isAuthenticated || userBD.status ? (
        <section className="profileBg-dark">
          <Navbar />
          <div className="container-profile-details">
              <div className="container-perfil">
                <img className="picPerfil" src={userBD?.picture || user.picture} alt="Img profile"></img>
              <div className="contentPef" >
                {<h4 className="h4-profile">{userBD?.name || user?.nickname}</h4>}
                <div className="div-name-profile">
                  <label className="label-date-profile">{userBD?.lastname}</label>
                </div>
                  {
                    !userBD.category ?
                      (<div>
                        <p className="ProfileDangerRequerement"> When is your birthday?</p>
                        <input
                          
                          type="date"
                          name="date"
                          className="input-complete"
                          placeholder="Date of Birth"
                          onChange={handleOnChange}
                          max={currentDate}
                        />
                        <button className="botonD" onClick={handleOnsubmit}
                        autofocus>
                          <img className="imgPencil" src={submit} alt="pencil" />
                        </button>
                      </div>)
                      : (<>
                        <div>
                          <label className="label-date-profile">{` ${userBD?.date}`}</label>
                        </div>
                        <div>
                          <label className="label-date-profile">Category :{` ${userBD?.category}`}</label>
                        </div>
                        <div>
                          <Link to={"/profile/Form"}>
                            <button className="botonD" >
                              <img className="imgPencil" src={pencil} alt="pencil" />
                            </button>
                          </Link>
                        </div>
                      </>)
                  }
              </div>
              </div>
          </div>
            <div className="container-opciones-profile">
              <Link to={"/home"}>
                <div className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg">Home</div>
              </Link>
              {
                userBD.category === 'admin' ?
                <Link to={"/home/admin"}>
                  <div className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg">Admin</div>
                </Link> :
                <></>
              }
            </div>
          <Footer />
        </section>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Profile;
