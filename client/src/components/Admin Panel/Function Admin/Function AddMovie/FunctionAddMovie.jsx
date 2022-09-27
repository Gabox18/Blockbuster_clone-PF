// import React from "react";
// import axios from "axios";
// import { Link} from "react-router-dom";
// import "./functionAddMovie.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { asyncInfoAdmin } from "../../../../redux/slice";
// import { useEffect } from "react";
// import { asyncAllgenres } from "../../../../redux/slice";

// function validate(input) {
//     let error = {};
//     if (!input.name || input.name.length < 3 || input.name.length > 12) {
//       error.name = "Complete the field name";
//     } else if (!input.description || input.description.length < 10 || input.description.length > 100) {
//       error.description = "Complete the field description";
//     } else if (!input.genre || input.genre.length === 0) { 
//       error.genre = "Complete the field genre";
//     } else if (!input.recommendation) {
//       error.recommendation = "Complete the field recomendation";
//     } else if (!input.image) {
//       error.image = "Complete the field image";
//     } 
//     return error;
//   };

// export default function FunctionAddMovie() {
//   let { genres } = useSelector(state => state.alldata)
//   const dispatch = useDispatch();
//   const [errors, setErrors] = useState({})
//   const [imagen, setImagen] = useState("");
//   const [input, setInput] = useState({
//     name: "",
//     description: "",
//     genre: [],
//     recommendation: "",
//     image: "",
//   });

//   useEffect(() => {
//     dispatch(asyncAllgenres());
//   },[dispatch]);

//   const uploadImage = async (e) => {
//     const files = e.target.files;
//     const data = new FormData();
//     data.append("file", files[0]);
//     data.append("upload_preset", "BlockBuster");
//     const respuesta = await axios.post(
//       "https://api.cloudinary.com/v1_1/dapicfoap/image/upload",
//       data
//     );
//     console.log(respuesta);
//     setImagen(respuesta.data.secure_url); //esa url se va a la DB
//     setInput({
//       ...input,
//       image: respuesta.data.secure_url,
//     });
//   };

//     function handleChange(e) { 
//       //console.log(errors) 
//       if(e.target.name==='genre'){
//         setInput({                                 
//           ...input,
//           [e.target.name]: [...input[e.target.name],e.target.value]
//       })
//       }else{
//         setInput({                                 
//           ...input,
//           [e.target.name]: e.target.value
//       })}  

//       setErrors(validate({
//           ...input,
//           [e.target.name]: e.target.value
//       }));
//       console.log(input);
//   }

//   function handleSubmit(e) {     
//     console.log(input.name.length)          
//     e.preventDefault();
//     setErrors(validate(input))
//     const errorCompletarFormu = validate(input)
//     if(Object.values(errorCompletarFormu).length !== 0 || !input.image){
//       alert ("Todos los campos deben ser requeridos")
//     } else {
//     dispatch(asyncInfoAdmin(input));
//     alert('Película creada con éxito');
//     setInput({
//       name: "",
//       description: "",
//       genre: [],
//       recommendation: "",
//     })
//     setImagen("")
//   }
//   }

//   return (
//     <div className="admin-contain">
//       <div>
//         <h1 className="admin-titulo"> ¡Share your movie and let's expand the cinema at home! </h1>
//       </div>
//       {/* //onSubmit={(e)=> handleSubmit(e)} */}
//       <form onSubmit={(e)=> handleSubmit(e)} className='formulario'>
//         <div>
//           <label> Name of the movie: </label>

//           <input
//             placeholder="Ex: Titanic"
//             type="text" value={input.name}
//             name="name"
//             autoComplete="off"
//             onChange={(e)=>handleChange(e)}
//           />
//           {errors.name && (
//           <p className='error'>{errors.name}</p> 
//        )}
//           <div>
//             <label className=""> Description: </label>
//             <input placeholder="Ex: description movie, tells the story..."
//               type="text"
//               value={input.description}
//               name="description"
//               autoComplete="off"
//               onChange={(e)=>handleChange(e)}
//             />
//             {errors.description && (
//           <p className='error'>{errors.description}</p>
//             )}
//           </div>

//           <div>
//             <label className=""> Genre: </label>
//             <select name={'genre'}  onChange={(e)=>handleChange(e)}>
//               {genres?.map((genre, index) => {
//                 return (
//                   <option key={index} value={genre}>
//                     {genre}
//                   </option>
//                 );
//               })}
//             </select>
//             {errors.genre && (
//             <p className='error'>{errors.genre}</p>
//           )}
//           </div>

//           <div>
//             <label className='display-block'> Recommendation </label>
//             <select
//               name="recommendation"
//               value={input.recommendation}
//               className=""
//               onChange={(e) => handleChange(e)}>
//               <option value=""> Choose your score </option>
//               <option value="1">⭐</option>
//               <option value="2">⭐⭐</option>
//               <option value="3">⭐⭐⭐</option>
//               <option value="4">⭐⭐⭐⭐</option>
//               <option value="5">⭐⭐⭐⭐⭐</option>
//               {errors.recommendation && (
//               <p className='error'>{errors.recommendation}</p>
//               )}
//             </select>
//           </div>

//           <input
//             name="image" //ESTE INPUT NO PUEDE TENER VALUE
//             placeholder="Carga aquí tu img"
//             type="file"
//             onChange={uploadImage}
//           />
//           <div>
//           {errors.image && (
//           <p className='error'>{errors.image}</p>
//           )}
//             <img src={imagen} alt="" width={'200px'}/>
//           </div>
//           <button className="submit-button" type="submit"> Load movie </button>
//         </div>
//       </form>
//       <Link to='/home'>
//         <button className="btn btn-outline-warning btn-block mb-10 rounded-pill shadow-lg" type="shadow-lg p-3 mb-5 bg-body rounded"> Back </button>
//       </Link>
//     </div>
//   );
// }