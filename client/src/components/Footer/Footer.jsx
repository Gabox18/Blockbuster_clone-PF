import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'


function Footer() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">
            Active
          </a> */}
          <button type="button" className="btn btn-outline-warning">Link</button>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">
            Link
          </a> */}
          <button type="button" className="btn btn-outline-warning">Link</button>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">
            Link
          </a> */}
          <button type="button" className="btn btn-outline-warning">Link</button>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
        <button type="button" className="btn btn-outline-warning">Link</button>
      </ul>
    </>
  );
}
export default Footer;