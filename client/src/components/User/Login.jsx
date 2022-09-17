import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './Login.css';

export default function LoginButton  ()  {
    const {loginWithRedirect}  = useAuth0()
  return (
 
    <div>
         <button onClick={()=>loginWithRedirect()} class="btn-shine">
          <span>Login</span>
         </button>
    </div>
  
  )
}



