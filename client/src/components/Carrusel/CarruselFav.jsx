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
                            <div className="mainCarruzelF">
                                <div className="sliderCarruzelF">
                                    <Link to={`/details/${e.id}`}>
                                        <img className="imgCarrF" key={i} src={e.poster} alt="img-carruzel" />
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

