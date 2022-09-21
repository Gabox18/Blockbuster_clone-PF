import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./Login";
import Logoutbutton from "./Logout";
import {Link} from 'react-router-dom'
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user)
  return (
    <div>
      {isAuthenticated ? (
        // https://mdbootstrap.com/docs/standard/extended/profiles/
        <section className="bg-dark">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mt-3 mb-4">
                      <img
                        src={user.picture}
                        className="rounded-circle img-fluid"
                      />
                    </div>
                    <h4 className="mb-2">{user.name}</h4>
                    <p className="text-muted mb-4">
                      Nickname: <span className="mx-2">|</span>{" "}
                      <a href="#!">{user.nickname}</a>
                    </p>
                    <p>Email : {user.email}</p>
                    <div className="mb-4 pb-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i class="bi bi-facebook"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i class="bi bi-twitter"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating"
                      >
                        <i class="bi bi-skype"></i>
                      </button>
                    </div>
                    <Logoutbutton/>
                    <Link to={'/home'}><div className="btn btn-primary btn-rounded btn-lg">home</div></Link>
        
                  </div>
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