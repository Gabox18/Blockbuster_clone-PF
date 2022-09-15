import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


export default function Logoutbutton ()  {
    const {logout} = useAuth0()
  return (
    <div>
        <button onClick={()=>logout({returnto:window.location.origin})}>logout</button>
    </div>
  )
}

