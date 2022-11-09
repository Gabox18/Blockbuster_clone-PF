import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export default function Card({ Title, Plot, img }) {
  return (
      <div className="card">
        <div className="card-img">
          <img className="posterCard" src={img} alt={"poster"} />
        </div>
        <div className="card-info">
        </div>
      </div>
  );
}
