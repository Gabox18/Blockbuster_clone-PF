import React from "react";
import Navbar from "../../Nav Bar/Navbar";
import Footer from "../../Footer/Footer";
import ReactPlayer from "react-player";
import './Play.css';

function Play(){

    return(
        <>
        <Navbar />
        <section className="cardSection">
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
        </>
    )
}
export default Play;