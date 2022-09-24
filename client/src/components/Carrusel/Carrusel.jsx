import React from "react";
import { Link } from "react-router-dom";
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
                                    <Link to={`/details/${e.imdbID}`}>
                                        <img className="imgCarr" key={i} src={e.Poster} alt="img-carruzel" />
                                    </Link>
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