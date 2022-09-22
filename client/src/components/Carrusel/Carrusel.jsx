import React from "react";
import './Carrusel.css';

function Carrusel({array}){

    return(
        <div className="containerCarruzel">

            {
                array?.map((e, i) => {
                    return (
                        <>
                            <div className="mainCarruzel">
                                <div className="sliderCarruzel">
                                    <img className="imgCarr" key={i} src={e.Poster} alt="img-carruzel" />
                                </div>
                            </div>
                        </>
                    )
                })
            }
            
        </div>
    )
}
export default Carrusel;


{/* 
    https://www.youtube.com/watch?v=ZDGE6CZP_tg&ab_channel=CodersBlock 
    https://www.youtube.com/watch?v=uhP6OL0bwpY&ab_channel=midudev
*/}