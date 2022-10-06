import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-0 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Blockbuster</h5>
              <p> Live the experience.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-upercase mb-4 font-weight-bold text-warning">Tecnologies</h5>
              <p>
                <a href={"https://reactjs.org/"} target={"_blank"} rel="noreferrer" className="text-white" style={{"text-decoration":"none"}}>React.js</a>
              </p>
              <p>
                <a href="https://www.typescriptlang.org/" target={"_blank"} rel="noreferrer" className="text-white" style={{"text-decoration":"none"}}>TypeScript</a>
              </p>
              <p>
                <a href="https://redux-toolkit.js.org/" target={"_blank"} rel="noreferrer" className="text-white" style={{"text-decoration":"none"}}>Redux Toolkits</a>
              </p>
              <p>
                <a href="https://nodejs.org/es/" target={"_blank"} rel="noreferrer" className="text-white" style={{"text-decoration":"none"}}>Node.js</a>
              </p>
              <p>
                <a href="https://www.mysql.com/" target={"_blank"} rel="noreferrer" className="text-white" style={{"text-decoration":"none"}}>MySql</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Usefull links</h5>
              <Link to='/terms'>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Terms and conditions</a>
              </p>
              </Link>
              <Link to='/privacy'>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Privacy Policy</a>
              </p>
              </Link>
              <Link to='/legal'>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Legal Information</a>
              </p>
              </Link>
             <Link to='/about'>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>About us</a>
              </p>
              </Link>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
              <p>
                <AiOutlineHome /> New York, NY 2333, US
              </p>
              <p>
                <BsEnvelope /><a href="mailto:blockbusterpf@gmail.com?Subject=welcome%20to%20blockbuster%20state%20your%20concern" target="_blank" rel="noreferrer"> blockbusterpf@gmail.com </a>
              </p>
              <p>
                <AiOutlinePhone /> +01 335 439 22
              </p>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row aling-items-center">
            <div className="col-md-7 col-lg-8">
              <p>
                Copyright @2022 All rights reserved by: 
                <a href="#" style={{"text-decoration": "none"}}>
                  <strong className="text-warning"> Blockbuster</strong>
                </a>
              </p>
              
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;