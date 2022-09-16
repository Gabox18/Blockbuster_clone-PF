import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';


function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Blockbuster</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nesciunt, libero possimus porro sed, distinctio recusandae, eum fugit ab ratione debitis! Laudantium incidunt quas ipsa saepe, nobis rerum vel commodi?</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-upercase mb-4 font-weight-bold text-warning">Tecnologies</h5>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>React.js</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Redux Toolkits</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Node.js</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>MySql</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Usefull links</h5>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Ypr Account</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Become an Affiliates</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>shipping Rates</a>
              </p>
              <p>
                <a href="#" className="text-white" style={{"text-decoration":"none"}}>Help</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
              <p>
                <AiOutlineHome /> New York, NY 2333, US
              </p>
              <p>
                <BsEnvelope /> SoyHenry@gmail.com
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
                Copyright @2020 All rights reserved by: 
                <a href="#" style={{"text-decoration": "none"}}>
                  <strong className="text-warning">Blockbuster</strong>
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