import React from "react";
import { Link } from "react-router-dom";
import './Carrusel.css';

function Carrusel({array}){
    return(
        <div className="containerCarruzel1">

            {
                array?.map((e, i) => {
                    return (
                        <>
                            <div className="mainCarruzel">
                                <div className="sliderCarruzel">
                                    <Link to={`/details/${e.id}`}>
                                        <img className="imgCarr1" key={i} src={e.poster} alt="img-carruzel" />
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