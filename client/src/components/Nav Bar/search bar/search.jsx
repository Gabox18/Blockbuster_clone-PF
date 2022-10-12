import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { asyncallMovies, asyncGetName} from "../../../redux/slice.js";
import "./Search.css";

export default function Searchbar({setCurrentPage}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  let history = useHistory();
  let { copyAllMovies } = useSelector(state => state.alldata);
  
  useEffect(() => {
    if(copyAllMovies.length === 0) dispatch(asyncallMovies())
  }, [copyAllMovies.length, dispatch]);

  function handleInputChange(e) {
    setName(e.target.value);
    console.log(name)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(name.length!==0){
      dispatch(asyncGetName(name.toLowerCase()));
      history.push('/Home/result');
      setName('')
      setCurrentPage(1);
    }
    
  }
  
  return (
    <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
        <input className="inputSearch" type="search" placeholder="Search" aria-label="Search" onChange={(e) =>
          handleInputChange(e)} value={name} />
        <button className="btn btn-outline-success text-light btnSearch " type="submit">🔎</button>
    </form>
  );
}