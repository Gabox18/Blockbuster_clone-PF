import React from "react";
import Navbar from "../Nav Bar/Navbar";
import { asyncCategorySwichGold } from "../../redux/slice";
import "./GoldPayZone.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function GoldPayZone() {
  let dispatch = useDispatch();
  let userDB = useSelector((state) => state.alldata.user);

  function handleSubmitGold() {
    let idSwich = { id: userDB.id };
    dispatch(asyncCategorySwichGold(idSwich));
  }
  console.log(window.location.href);
  let url = window.location.href;
  let tokenredirec = url.split('').slice(45,62).join('')
  console.log(tokenredirec);

  return tokenredirec === userDB.token || userDB.category -== "admin"? (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="sectionPay">
          <div className="card_boxg">
            <span>Gold</span>
              <div className="contentPayg">
                <h2 className="titleGold">Gold Subscription</h2>
                <h3 className="subtitle">This Plan Includes:</h3>
                <p className="p-style-silverg">Full HD 4k</p>
                <p className="p-style-silverg">40 movies</p>
                <p className="p-style-silverg">Fav list</p>
                <h3 className="subtitle">U$D 24.99</h3>
                <img
                  src="https://res.cloudinary.com/dapicfoap/image/upload/v1664773992/BlockBuster%20Nuestro/Logo_enzyls.png"
                  width="90px"
                  alt="loguito"
                />
              </div>
        </div>
        <Link to={"/home"}>
          <div className="button" onClick={handleSubmitGold}>
            <div className="box">⬆️</div>
            <div className="box">H</div>
            <div className="box">O</div>
            <div className="box">V</div>
            <div className="box">E</div>
            <div className="box">R</div>
            <div className="box">⬆️</div>
          </div>
        </Link>
      </section>
    </div>
  ) : (
    <div>
      <Link to={"/home"}>try again </Link>
    </div>
  );
}
