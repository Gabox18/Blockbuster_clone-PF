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
                        className="react-player-Play"
                        url="https://res.cloudinary.com/dapicfoap/video/upload/v1664469154/BlockBuster/Avengers_Endgame_Tr%C3%A1iler_oficial_1_Espa%C3%B1ol_Latino_HD_mtov89.mp4"
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