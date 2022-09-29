import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFormComment, asyncCommentById } from "../../redux/slice";
import { useState } from "react";
import "./ComentForm.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import avatar from "../../assets/avatar.png"



export default function ComentForm({idParams}) {

  let { id } = useParams();
  const dispatch = useDispatch();
  let userdb = useSelector((state) => state.alldata.user);
  let {commentMovie} = useSelector((state) => state.alldata);
  const [input, setInput] = useState({
    coment: "",
  });

  // useEffect(()=>{
  //   if(Object.keys(commentMovie).length !== 0) {
  //     console.log(parseInt(idParams),commentMovie,'------->')
  //     dispatch(asyncCommentById(parseInt(idParams)))}

  // },[])

  const handleOnChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      name: userdb.name,
      idUser: userdb.id,
      email: userdb.email,
      picture: userdb.picture,
      coment: e.target.value,
      status: true,
    });
  };


  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    console.log(input);
    dispatch(asyncFormComment(input, id));
    dispatch(asyncCommentById(parseInt(idParams)))
    setTimeout(() => {
      dispatch(asyncCommentById(parseInt(idParams)))
  }, 1000);
    
    
    setInput({
      coment: "",
    });
  };

  const validate = (data) => {
    let error = {};
    if (data.coment.length < 3 || data.coment.length > 300)
      error.coment = "Complete the field comment";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.coment) return true;
  }
  return (
    <div className="container-1">
      <div className="containerinfo">
        <div>

            <img src={userdb.picture} className="imgPefil" alt="fotito"/>   

          
        </div>
        <form onSubmit={(e) => handleOnsubmit(e)}>
          <div className="textNComent">
            <textarea
              type="message"
              name="comment"
              value={input.coment}
              className="input"
              placeholder="Your review"
              onChange={handleOnChange}
              autoFocus
            />
          </div>

          <button
            className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
            type="submit"
            disabled={invalidAdd(input)}
          >
            Send
          </button>
        </form>
      </div>
      <div className="borbo">
        <h5>comments from other users about this movie.</h5>
      </div>
    </div>
  );
}
