import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export default function Card({ Title, Plot, img }) {
  return (
    <>
      {/* <div class="card" style={`background-image: url(${movie.Poster});`} alt='img' >
        <div class="card-img"></div>
        <div class="card-info">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor"
            ></path>
          <p class="text-title">{movie.Title}</p>
          <p class="text-body">{movie.Plot}</p>
        </div>
      </div> */}
      {/* <div class="card">
        <img src={img}/>
<div class="card-img"></div>
  <div class="card-info">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
    <p class="text-title">{Title}</p>
    <p class="text-body">{Plot}</p>
  </div>
</div> */}
<div>

      <div class="card">
      
      
        <div class="card-img"><img src={img}/></div>
        <div class="card-info">
        
          {/* <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          > */}
          {/* </svg> */}
          <p class="text-title">{Title}</p>
          <p class="text-body">{Plot}</p>
        </div>
      </div>
      </div>
    </>
  );
}
