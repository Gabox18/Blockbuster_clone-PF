import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./Login";
import Logoutbutton from "./Logout";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <div>
      {isAuthenticated ? (
        // https://mdbootstrap.com/docs/standard/extended/profiles/
        <section className="profileBg-dark">
          <div className="contain-profile">
            
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-10 col-xl-4">
              <div className="small-profile">
                <div className="card-profile">
                  <div className="card-profile text-center">
                    <div className="mt-3 mb-9" >
                      <img src={user.picture} className="img-profile" />
                    </div>
                    <h4 className="name-profile">{user.name}</h4>
                    <p className="nick-profile"> Nickname:<span className="mx-2">{user.nickname}</span>{" "}</p>
                    <p className="email-profile">Email : {user.email}</p>
                  </div>
                  </div>
                  
                  <Link to={"/home"}>
                    <div className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg">
                      Home
                    </div>
                  </Link>
                  <Link to={"/infoprofile"}>
                    <div className="btn btn-outline-warning btn-block mb-10 rounded shadow-lg">
                      Add info
                    </div>
                  </Link>
                  <Logoutbutton />
              </div>
            </div>
            </div>
          </div>
        </section>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Profile;
