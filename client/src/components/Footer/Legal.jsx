import React from "react";
import Navbar from "../Nav Bar/Navbar";
import Footer from "./Footer";
import "./Legal.css";

export default function Legal() {
  return (
    <div className="all-legal">
      <div className="legal-information">
        <div className="noseque">
          <h1 className="">
            <b className="legal-title">Legal Information</b>
          </h1>
          <p>
            Blockbuster is a project made by students from{" "}
            <a href="https://www.soyhenry.com/">Henry</a> as part of an
            assignment.
          </p>
          <p>It is not a real nor functional website, just a made-up one.</p>
          <p>None of the products displayed can be sold or purchased.</p>
          <p>
            All the product images, descriptions and serial numbers used are for
            demostrative purposes only.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
