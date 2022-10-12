import React from "react";
import Navbar from "../Nav Bar/Navbar";
import { asyncCategorySwich } from "../../redux/slice";
import "./SilverPayZone.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SilverPayZone() {
  let dispatch = useDispatch();
  let userDB = useSelector((state) => state.alldata.user);

  function handleSubmitSilver() {
    let idSwich = { id: userDB.id };
    dispatch(asyncCategorySwich(idSwich));
  }
  let url = window.location.href;
  let tokenredirec = url.split("").slice(47, 64).join("");
  return tokenredirec === userDB.token || userDB.category === "admin" ? (
    <div>
      <div>
        <Navbar />
      </div>
      <section className="sectionPay">
        <div className="containerPay">
          <div className="card_box1">
            <span>Silver</span>
            <div className="containerPay">
              <div className="contentPay">
                <h2 className="titleSilver">Silver Subscription</h2>
                <h3 className="subtitle">This Plan Includes:</h3>
                <p className="p-style-silver">Full HD 1080pi</p>
                <p className="p-style-silver">20 movies</p>
                <p className="p-style-silver">Fav list</p>
                <h3 className="subtitle">U$D 19.99</h3>
                <img
                  src="https://res.cloudinary.com/dapicfoap/image/upload/v1664773992/BlockBuster%20Nuestro/Logo_enzyls.png"
                  width="90px"
                  alt="loguito"
                />
              </div>
            </div>
          </div>
        </div>
        <Link to={"/home"}>
          {/*onClick={handleSubmitSilver}*/}

          <div className="button" onClick={handleSubmitSilver}>
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
