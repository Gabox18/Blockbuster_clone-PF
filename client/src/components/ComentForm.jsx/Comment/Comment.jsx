import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncDeleteComment } from "../../../redux/slice";
import { useParams } from 'react-router-dom';


export default function Comment (info) {
  const [input, setInput] = useState({
    id: "",
    coment: "",
  });
  let edit = false;
  const dispatch = useDispatch()

  let{idMovie} = useParams()

  function handleOnEdit(e) {
    edit = true
    setInput({
      ...input,
      id: info.id,
      coment: e.target.value,
      
    });
 
  }
  function handleOnChange (e){
    setInput({
        ...input,
        coment:e.target.value,
        id:info.id
    })
  }
  function handleDelete(idMovie){
    
    console.log(info.id,"esto es el id")
    dispatch(asyncDeleteComment(info.id,idMovie))
  }
  function handleOnSubmit (e){
    e.preventDefault(e)
    setInput({
        ...input,
    })
    dispatch()
  }
  return (
    <div>
      <div className="info-comment">
        <div className="info-profile">
            
                {/* <div>
            <img src={user.picture} alt="fotito"/>
          <h3>{user.nickname}</h3>
          </div> */}
          
        </div>


          <div className="comment">
            <p>{info.coment}</p>
          </div>
        
        {/* <div>
          <input type="text" name="comment"value={info.coment} className="textInput" />
         </div> */}

        
      </div>
      <div>
        {/* {edit ? <button >Submit</button>:
        <button onClick={handleOnEdit}>Edit</button>} */}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
