import React from "react";
import "./Exile.css"
import vomit from "../../assets/vomit.png"
import Logoutbutton from "../User/Logout";

function exile() {
    return (
      <div className="container-fluid12">

        {/* <div className="container-fluid">
          
          </div> */}
          <Logoutbutton/>
       <div class="card12">
        
           <img className="vomit"src={vomit} alt="vomit"/>
           <h1>you have been banned!💩🦄</h1>
       </div>

      </div>
    );
  }
  
  export default exile;
  