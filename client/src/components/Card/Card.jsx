import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

export default function Card({ Title, Plot, img }) {
  return (
    <>
      <div>
        <div class="card">
          <div class="card-img"><img src={img} alt={'poster'} /></div>
          <div class="card-info">
            <p class="text-title">{Title}</p>
            <p class="text-body">{Plot}</p>
          </div>
        </div>
      </div>
    </>
  );
}
