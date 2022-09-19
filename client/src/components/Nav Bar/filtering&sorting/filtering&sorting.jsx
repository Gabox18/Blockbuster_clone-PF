import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncAllgenres, filterGenre,orderMovies } from "../../../redux/slice.js";
import './filtering&sorting.css';

function FilteringSorting(props) {

    let { genres } = useSelector(state => state.alldata)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncAllgenres())
    }, [dispatch, props])

    function handleSelectFilter(e) {
        dispatch(filterGenre(e.target.value)) && props.setCurrentPage(1);
    }

      function handleSelectOrderBy(e) {
        dispatch(orderMovies(e.target.value));
        props.setCurrentPage(1);
      }

    return (
        <div className="containerFiltering text-center mx-auto gap-3">
            <div>
                <select 
                    className="form-select form-select-md bg-primary" 
                    aria-label="Default select example" 
                    onChange={(e)=>handleSelectOrderBy(e)}
                >
                    <option selected>sort by</option>
                    <optgroup label="Name">
                        <option value="asc_Alf">A-Z</option>
                        <option value="des_Alf">Z-A</option>
                    </optgroup>
                    <optgroup label="Rating">
                        <option value="asc_Ata">Upward</option>
                        <option value="des_Ata">falling</option>
                    </optgroup>
                </select>
            </div>

            <div>
                <select className="form-select form-select-md bg-primary" onChange={(e) => handleSelectFilter(e)}>
                    <option value={'all'} selected>Filter By</option>
                    <optgroup label="Genres">
                        {genres?.map((genre, index) => {
                            return (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            );
                        })}
                    </optgroup>
                </select>
            </div>
        </div>
    );
}

export default FilteringSorting