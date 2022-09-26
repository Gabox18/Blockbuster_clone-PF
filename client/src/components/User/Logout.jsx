import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Logout.css'


export default function Logoutbutton ()  {
    const {logout} = useAuth0()
  return (
        <button className="btn btn-outline-warning btn-block mb-9 rounded shadow-lg btnLogout" onClick={()=>logout({returnto:window.location.origin})}>Logout</button>
  )
}

