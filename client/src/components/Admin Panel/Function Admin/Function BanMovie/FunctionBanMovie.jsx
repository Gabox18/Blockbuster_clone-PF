import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { asyncallMovies,  asyncUpdateMovie } from '../../../../redux/slice'
import { useDispatch } from 'react-redux'

export default function FunctionBanMovie() {
    
 let {copyAllMovies} = useSelector((state)=> state.alldata)
 let dispatch = useDispatch()
 let [input,setInput] = useState({
    id:''
 })



//  const handeOnBan = (e) => {
//     e.preventDefault();
//     let objetito = { id: e.target.value };
//     console.log(objetito);
//     dispatch(asynbanUsers(objetito));
//     dispatch(asyncallUsers());
//   };
useEffect( ()=>{
    dispatch(asyncallMovies())
}
)
function handleOnChange(e){
setInput({
    id:e.target.value
})
}
 function handleSubmitUnban(e){
    e.preventDefault()
    console.log(input,'como llega')
    dispatch(asyncUpdateMovie(input))
    setInput({
        id:''
    })
 }

  return (
    <div>
        <form onSubmit={handleSubmitUnban}>
        <select onChange={handleOnChange}>
            <option >banned movies</option>
            {
                copyAllMovies?.map((e)=>(
                    e.status === false ?
                    <option name='id'value={e.id} >{e.name}  - id movie:{e.id}  - status:{e.status.toString()}</option>:<></>
                )

                )
            }
        </select>
        <button type='submit'>Unbann</button>
        </form>
        
    </div>
  )
}

