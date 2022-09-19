import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncallMovies, asyncGetName} from "../../../redux/slice.js";
import "./Search.css";

export default function Searchbar({setCurrentPage}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(asyncallMovies());
  }, [dispatch]);

  function handleInputChange(e) {
    setName(e.target.value);
    console.log(name)
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(asyncGetName(name.toLowerCase()));
    setCurrentPage(1);
  }
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
        <div className="botoncito">
          <input className="input" type="search" placeholder="Search" aria-label="Search" onChange={(e) => 
            handleInputChange(e)} value={name}/>
            <div className='btn btn-outline-primary text-light'>Search</div>
            {/* <button className="btn btn-outline-success text-light " type="submit">Search</button> */}
            </div>
          
      </form>
      </div>
  );
}