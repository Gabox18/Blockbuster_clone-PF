import React from "react";
import "./ProfileCard.css"
import avatar from "../../assets/avatar.png"
import pencil from "../../assets/pencil.png";
export const ProfileCard = (name,lastName, nickName, picture,email,date,category) => {
  return (
    <div>
      <div className="cardPerf">
        <div className="imgPerf">
          <img className="picPerfil" src={avatar} alt="fotito"></img>
        </div>
        <div className="contentPef">
          {<h3>NICKNAME</h3>}
          <ul>
            <li>Name</li>
            <li>LastName</li>
            <li>email</li>
            <li>date</li>
            <li>category</li>
          </ul>
          <button className="botonD" >
                <img className="imgPencil" src={pencil} alt="pencil" />
          </button>
        </div>
      </div>
    </div>
  );
};
