import React from "react";
import Navbar from "../../Nav Bar/Navbar";
import Footer from "../../Footer/Footer";
import ReactPlayer from "react-player";
import './Play.css';
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
 



function Play(){

let userdb = useSelector((store) => store.alldata.user);
const {id} = useParams()

    return(
        <div>
        {userdb.category === "admin" ||
        userdb.category === "gold" ||
        userdb.category === "silver" ? (
        <>
        <Navbar />
        <section className="cardSection">
            <div className="btn btn-outline-primary text-light btn-xs btnLogin btnPlayRedirect">
              <Link to={`/details/${id}`} >Detail</Link>
            </div>
            <div className="cardContainer">
                <div className="cardReactPlayer">
                    <ReactPlayer
                        controls
                        className="react-player-Play1"
                        url='https://res.cloudinary.com/dapicfoap/video/upload/v1665016891/BlockBuster%20Nuestro/BATMAN_rx1ghr.mp4'
                         playing={true}
                        onReady      
                    />
                </div>
            </div>
        </section>
        <Footer />
        </> ): <div> 
        You must be a gold or silver user.
      <Link to="/home">
          <button
            className="btn btn-primary btn-block mb-10 rounded-pill shadow-lg"
            type="shadow-lg p-3 mb-5 bg-body rounded"
          >
            {" "}
           Home{" "}
          </button>
        </Link>
      </div> }
        </div>
    )
}
export default Play;