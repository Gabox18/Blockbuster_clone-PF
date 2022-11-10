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


