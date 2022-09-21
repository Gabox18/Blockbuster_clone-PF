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

      {isAuthenticated  
        ?<div className="div-profile">
          <img src={user.picture} alt={user.nickname} />
          <h1>{user.name}</h1>
          <p>Nickname : {user.nickname}</p>
          <p>Email : {user.email}</p>
          <Logoutbutton/>
          <Link to={'/home'}><div className='btn btn-outline-primary text-light'>home</div></Link>
        </div>

      :<LoginButton/>}

    </div>
  );
};

export default Profile;