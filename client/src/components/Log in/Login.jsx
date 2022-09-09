import React,{useState} from 'react'
import { useDispatch } from 'react-redux';


export default function Login  ()  {
    const dispatch = useDispatch()
    const [user,setUser] = useState()
    function handleOnChange(e){
        setUser(e.target.value)
    }
    function handleOnSubmit(){
        e.preventDefault(e)
        dispatch('dispatch del login')//corregir
    }
  return (
    <div>
        <input
        type='text'
        placeholder='user'
        onChange={handleOnChange}
        value={user}
        />
        <input
        type='password'
        placeholder='Password'
        onChange={handleOnChange}
        />
        <button onSubmit={handleOnSubmit}>Log-in</button>
        <Link to='/'>{/*completar*/}
            <button>Create account</button>
        </Link>
    </div>
  )
}


