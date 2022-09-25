import React from "react";
import axios from "axios";
import { Link, useHistory} from "react-router-dom";
import "./adminPanel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncInfoAdmin } from "../../redux/slice";
import { useEffect } from "react";
import { asyncallMovies } from "../../redux/slice";
import { data } from "../../redux/dataMock";

function validate(input) {
    let error = {};
    if (!input.name || input.name.length < 3 && input.name.length > 12) {
      error.name = "Complete the field name";
    } else if (!input.description || input.description.length < 10 && input.description.length > 100) {
      error.description = "Complete the field description";
    } else if (!input.genre || input.genre.length < 3) { 
      error.genre = "Complete the field genre";
    } else if (!input.recommendation) {
      error.recommendation = "Complete the field recomendation";
    } else if (!input.image || !input.file) {
      error.image = "Complete the field image";
    } 
    return error;
  };

export default function AdminPanel() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({})
  const [imagen, setImagen] = useState("");
  const [input, setInput] = useState({
    name: "",
    description: "",
    genre: "",
    recommendation: "",
    image: "",
  });

  useEffect(() => {
    dispatch(asyncallMovies());
  },[]);

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
      image: respuesta.data.secure_url,
    });
  };

  function invalidAdd(input) {
    let error = validate(input);
    if (error.name || error.description || error.genre || error.recommendation || error.imagen)
      return true;
    else {
      return false;
    }
  }

    function handleChange(e) {                      //cada vez que se ejecuta handlechange, al estado input,
      setInput({                                  //ademas de lo que tiene, se le agrega el target.value
          ...input,
          [e.target.name]: e.target.value
      })
      setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
      }));
      console.log(input);
  }

  function handleSubmit(e) {     
    console.log(errors)          
    e.preventDefault();
    setErrors(validate(input))
    const errorCompletarFormu = validate(input)
    if(Object.values(errorCompletarFormu).length !== 0 || !input.image || !input.file){
      alert ("Todos los campos deben ser requeridos")
    } else {
    dispatch(asyncInfoAdmin(input));
    alert('Película creada con éxito');
    setInput({
      name: "",
      description: "",
      genre: "",
      recommendation: "",
      image: "",
    })
    history.push('/home')
  }
  }

  return (
    <div className="admin-contain">
      <div>
        <h1 className="admin-titulo"> ¡Share your movie and let's expand the cinema at home! </h1>
      </div>
      {/* //onSubmit={(e)=> handleSubmit(e)} */}
      <form onSubmit={(e)=> handleSubmit(e)} className='formulario'>
        <div>
          <label htmlForcl=""> Name of the movie: </label>

          <input
            placeholder="example, Titanic"
            type="text" value={input.name}
            name="name"
            autocomplete="off"
            onChange={(e)=>handleChange(e)}
          />
          <div>
            <label className=""> Description: </label>
            <input placeholder="example, based on, tells the story..."
              type="text"
              value={input.description}
              name="description"
              autocomplete="off"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div>
            <label className=""> Genre: </label>
            <input placeholder="example, Action, Comedy"
              type="text"
              value={input.genre}
              name="genre"
              autocomplete="off"
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div>
            <label className='display-block'> Recommendation </label>
            <select
              name="recommendation"
              value={input.recommendation}
              className=""
              onChange={(e) => handleChange(e)}>
              <option value=""> Choose your score </option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              {errors.recommendation && <p className="error">{errors.recommendation}</p>}
            </select>
          </div>

          <input
            name="image" //ESTE INPUT NO PUEDE TENER VALUE
            placeholder="Carga aquí tu img"
            type="file"
            onChange={uploadImage}
          />
          <div>
            <img src={imagen} alt="" />
          </div>
          <button className="submit-button" type="submit"> Load movie </button>
        </div>
      </form>
      <Link to='/home'>
        <button className="btn btn-outline-warning btn-block mb-10 rounded-pill shadow-lg" type="shadow-lg p-3 mb-5 bg-body rounded"> Back </button>
      </Link>
    </div>
  );
}