import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import './Profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }
  
  return (
    
    isAuthenticated && (
      <div >
        {/* <img src={user.picture} alt={user.name} /> */}
        <Link to='/profile'>
          <div >
            <div className='btn btn-outline-primary text-light'>Profile</div>
       </div>
       </Link>
      </div>
    )
    
    
  );
};

export default Profile;