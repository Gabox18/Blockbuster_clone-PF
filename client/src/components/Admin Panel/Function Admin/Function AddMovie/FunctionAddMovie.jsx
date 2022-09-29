import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./functionAddMovie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncInfoAdmin } from "../../../../redux/slice";
import { useEffect } from "react";
import { asyncAllgenres } from "../../../../redux/slice";

function validate(input) {
  let error = {};
  if (!input.name || input.name.length < 2 || input.name.length > 17) {
    error.name = "Complete the field name";
  }
  if (!input.year || input.year === Number || input.year.length === 4) {
    error.description = "Complete the field description";
  }
  if (!input.recommendation || input.recommendation.length === 0) {
    error.recommendation = "Complete the field recomendation";
  }
  if (!input.genre || input.genre.length === 0 || input.genre.length < 2) {
    error.genre = "Complete the field genre";
  }
  if (
    !input.description |
    (input.description.length < 5) |
    (input.description.length > 100)
  ) {
    error.description = "Complete the field description";
  }
  if (!input.rated | (input.rated.length < 2) || input.rated.length > 11) {
    error.rated = "Complete the field rated";
  }
  if (
    !input.released | (input.released.length < 2) ||
    input.released.length > 11
  ) {
    error.released = "Complete the field released";
  }
  if (!input.runtime | (input.runtime.length < 1) || input.runtime.length > 7) {
    error.runtime = "Complete the field runtime";
  }
  if (
    !input.director | (input.director.length < 6) ||
    input.director.length > 15
  ) {
    error.director = "Complete the field director";
  }
  if (!input.actors | (input.actors.length < 6) || input.actors.length > 15) {
    error.actors = "Complete the field actors";
  }
  if (
    !input.language | (input.language.length < 6) ||
    input.language.length > 15
  ) {
    error.language = "Complete the field language";
  }
  if (!input.plot | (input.plot.length < 6) || input.plot.length > 20) {
    error.plot = "Complete the field plot";
  }
  if (
    !input.country | (input.country.length < 3) ||
    input.country.length > 20
  ) {
    error.country = "Complete the field country";
  }
  if (
    !input.imdbVotes | (input.imdbVotes.length < 1) ||
    input.imdbVotes.length > 5
  ) {
    error.imdbVotes = "Complete the field votes";
  }
  if (!input.imdbRating) {
    error.imdbRating = "Complete the field rating";
  }
  if (!input.status) {
    error.status = "Complete the field status";
  } else if (!input.poster) {
    error.poster = "Complete the field poster";
  }
  return error;
}

export default function FunctionAddMovie() {
  let { genres } = useSelector((state) => state.alldata);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [imagen, setImagen] = useState("");
  const [input, setInput] = useState({
    name: "",
    year: "",
    recommendation: "",
    genre: [],
    description: "",
    rated: "",
    released: "",
    runtime: "",
    director: "",
    actors: "",
    language: "",
    plot: "",
    country: "",
    imdbVotes: "",
    imdbRating: "",
    status: "",
    poster: "",
  });

  useEffect(() => {
    dispatch(asyncAllgenres());
  }, [dispatch]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "BlockBuster");
    const respuesta = await axios.post(
      "https://api.cloudinary.com/v1_1/dapicfoap/image/upload",
      data
    );
    console.log(respuesta);
    setImagen(respuesta.data.secure_url); //esa url se va a la DB
    setInput({
      ...input,
      poster: respuesta.data.secure_url,
    });
  };

  function handleChange(e) {
    if (e.target.name === "genre") {
      setInput({
        ...input,
        [e.target.name]: [...input[e.target.name], e.target.value],
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    dispatch(asyncInfoAdmin(input));
    alert("Película creada con éxito");
    setInput({
      name: "",
      year: "",
      recommendation: "",
      genre: [],
      description: "",
      rated: "",
      released: "",
      runtime: "",
      director: "",
      actors: "",
      language: "",
      plot: "",
      country: "",
      imdbVotes: "",
      imdbRating: "",
      status: "",
      poster: "",
    });
    setImagen("");
    console.log("soy input", input);
  }

  return (
    <div>
      <div className="allFondo">
        <h1 className="admin-titulo"> Add new movie </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="formulario">
          <div>
            <p className="titleCMovie">
              <b>Movie name</b>
            </p>
            <input
              className="impAdmin"
              placeholder="Ex: Titanic"
              type="text"
              value={input.name}
              name="name"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <p className="titleCMovie">
              <b>Year</b>
            </p>
            <input
              className="impAdmin"
              type="number"
              value={input.year}
              name="year"
              autocomplete="off"
              onChange={(e) => handleChange(e)}
              placeholder="Ex: 2011"
            />
            {errors.year && <p className="error">{errors.year}</p>}

            <p className="titleCMovie">
              <b>Recomendation</b>
            </p>
            <select
              className="impAdmin"
              name="recommendation"
              value={input.recommendation}
              onChange={(e) => handleChange(e)}
            >
              <option value=""> Choose your score </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              {errors.recommendation && (
                <p className="error">{errors.recommendation}</p>
              )}
            </select>

            <p className="titleCMovie">
              <b>Genre</b>
            </p>
            <select
              className="impAdmin"
              name="genre"
              value={input.genre}
              onChange={(e) => handleChange(e)}
            >
              {genres?.map((genre, index) => {
                return (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
            {errors.genre && <p className="error">{errors.genre}</p>}

            <p className="titleCMovie">
              <b>Description</b>
            </p>
            <textarea
              className="descriptionArea"
              placeholder="Ex: description movie, tells the story..."
              type="text"
              value={input.description}
              name="description"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}

            <p className="titleCMovie">
              <b>Rated</b>
            </p>

            <input
              className="impAdmin"
              placeholder=""
              type="text"
              value={input.rated}
              name="rated"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.rated && <p className="error">{errors.rated}</p>}

            <p className="titleCMovie">
              <b>Released</b>
            </p>

            <input
              className="impAdmin"
              placeholder=""
              type="text"
              value={input.released}
              name="released"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.released && <p className="error">{errors.released}</p>}
            <p className="titleCMovie">
              <b>Runtime</b>
            </p>

            <input
              className="impAdmin"
              placeholder="Ex: 1 h"
              type="text"
              value={input.runtime}
              name="runtime"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.runtime && <p className="error">{errors.runtime}</p>}
          </div>
          <div>

            <p className="titleCMovie">
              <b>Director</b>
            </p>

            <input
              className="impAdmin"
              placeholder="Ex: Eleanor de Wilde"
              type="text"
              value={input.director}
              name="director"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.director && <p className="error">{errors.director}</p>}

            <p className="titleCMovie">
              <b>Actors</b>
            </p>

            <input
              className="impAdmin"
              placeholder="Ex: Mia Goth, Bill Nighy"
              type="text"
              value={input.actors}
              name="actors"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.actors && <p className="error">{errors.actors}</p>}

            <p className="titleCMovie">
              <b>Language</b>
            </p>

            <input
              className="impAdmin"
              placeholder="Ex: Spanish, English"
              type="text"
              value={input.language}
              name="language"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.language && <p className="error">{errors.language}</p>}

            <p className="titleCMovie">
              <b>Plot</b>
            </p>

            <input
              className="impAdmin"
              placeholder="URL img movie"
              type="text"
              value={input.plot}
              name="plot"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.plot && <p className="error">{errors.plot}</p>}

            <p className="titleCMovie">
              <b>Country</b>
            </p>

            <input
              className="impAdmin"
              placeholder="Ex: Germany, Argentina, France"
              type="text"
              value={input.country}
              name="country"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.country && <p className="error">{errors.country}</p>}
            <p className="titleCMovie">
              <b>imdbVote</b>
            </p>
            <input
              className="impAdmin"
              placeholder=""
              type="text"
              value={input.imdbVote}
              name="imdbVote"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.imdbVote && <p className="error">{errors.imdbVote}</p>}
            <p className="titleCMovie">
              <b>imdbRating</b>
            </p>
            <input
              className="impAdmin"
              placeholder=""
              type="text"
              value={input.imdbRating}
              name="imdbRating"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.imdbRating && <p className="error">{errors.imdbRating}</p>}

            <p className="titleCMovie">
              <b>Status</b>
            </p>

            <input
              className="impAdmin"
              placeholder=""
              type="text"
              value={input.status}
              name="status"
              autoComplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.status && <p className="error">{errors.status}</p>}

            <input
              className="impAdmin"
              name="poster" //ESTE INPUT NO PUEDE TENER VALUE
              placeholder=""
              type="file"
              onChange={uploadImage}
            />

            {errors.poster && <p className="error">{errors.poster}</p>}

            <img src={imagen} alt=""  />
          </div>

            <button className="submit-button" type="submit">
              {" "}
              Load movie{" "}
            </button>
         
        </form>
      </div>
    </div>
  );
}
