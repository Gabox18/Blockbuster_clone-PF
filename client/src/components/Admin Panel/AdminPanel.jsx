import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function validate(input) {
  let errors = {};
  if (!input.name || input.name.length < 3) {
    errors.name = "Se requiere que ingrese un nombre para la película";
  } else if (!input.description) {
    errors.description = "Se requiere que ingrese una descripción";
  } else if (!input.genre) {
    errors.genre = "Se requiere que ingrese un genero para la pelicula";
  } else if (!input.recommendation) {
    errors.recommendation = "Se requiere que de una puntuación a la pelicula";
  } else if (!input.movies) {
    errors.movies = "Se requiere que ingrese una película";
  }
  return errors;
}

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
    if(Object.values(errorCompletarFormu).length !== 0 || !input.movies){
      alert ("Todos los campos deben ser requeridos")
    } else {
    dispatch((imagen));
    alert('Película creada con éxito');
    setInput({
      name: "",
      description: "",
      genre: "",
      recommendation: "",
      image: "",
    })
    history.push('/home');
  }
  }

  return (
    <div className="admin-containPanel">
      <div>
        <h1 className="admin-titulo"> ¡Share your movie and let's expand the cinema at home! </h1>
      </div>
      {/* //onSubmit={(e)=> handleSubmit(e)} */}
      <form className='formularioAdmin'> 
        <div>
          <div className="mb-3">
            <label htmlForcl=""> Name of the movie: </label>
            <input
            placeholder= "example, Titanic"
            type="text"
            value={input.name}
            name="name"
            autocomplete="off"
            />
          </div>
          <div className="mb-3">
            <label className=""> Description: </label>
            <input
            placeholder="example based on, tells the story..."
            type="text"
            value={input.name}
            name="description"
            autocomplete="off"
              />
          </div>
          <div>
            <label className=""> Genre: </label>
          <input
          placeholder= "ej. Action, Comedy"
          type="text"
          value={input.name}
          name="genre"
          autocomplete="off"
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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

          <button className="submit-buttonAdmin" type="submit"> Load movie </button>
        </div>
      </form>
      <Link to='/home'>
        <button 
        className="btn btn-outline-warning btn-block mb-10 rounded-pill shadow-lg"
        type="shadow-lg p-3 mb-5 bg-body rounded">

        Back </button>
      </Link>
    </div>
  );
}
