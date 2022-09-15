import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export default function LoginButton  ()  {
    const {loginWithRedirect}  = useAuth0()
  return (
 
    <div>
         <button onClick={()=>loginWithRedirect()}>Log in</button>
    </div>
  
  )
}



// import React,{useState} from 'react'
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';




// export default function Login  ()  {
    
//     const dispatch = useDispatch()
//     const [user,setUser] = useState()
//     function handleOnChange(e){
//         setUser(e.target.value)
//     }
//     function handleOnSubmit(e){
//         e.preventDefault(e)
//         dispatch('dispatch del login')//corregir
//     }


//   return (
//     <div>
//         <input
//         type='text'
//         placeholder='user'
//         onChange={handleOnChange}
//         value={user}
//         />
//         <input
//         type='password'
//         placeholder='Password'
//         onChange={handleOnChange}
//         />
//         <button onSubmit={handleOnSubmit}>Log-in</button>
//         <Link to='/'>{/*completar*/}
//             <button>Create account</button>
//         </Link>
//     </div>
//   )
// }


