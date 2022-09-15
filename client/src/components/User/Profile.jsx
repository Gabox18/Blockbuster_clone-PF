import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }
  
  return (
    
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} /> */}
        <Link to='/profile'>
       <button img={user.picture} alt={user.name}></button>
       </Link>
      </div>
    )
    
    
  );
};

export default Profile;