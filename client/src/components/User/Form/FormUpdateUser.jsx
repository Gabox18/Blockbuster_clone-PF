import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynUpdateUser } from "../../../redux/slice";
import "./FormUpdateUser.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Nav Bar/Navbar";
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

export default function FormUpdateUser() {
  let userDB = useSelector((state) => state.alldata.user);
  const dispatch = useDispatch();
  let history = useHistory();
  const [input, setInput] = useState({
    name: "",
    date: "",
    lastname: "",
    id: userDB?.id,
  });

  let date = new Date();
  let currentDate = date.toISOString().split("T")[0]; //fecha de hoy

  const validate = (data) => {
    let error = {};
    const onlyLetter = new RegExp("^[A-Z]+$", "i");

    if (!data.name) error.name = "complete name";
    else if (!onlyLetter.test(data.name))
      error.name = "Only letter without space";
    else if (data.name?.length < 4 || data.name?.length > 15)
      error.name = " Min: 4 - Max: 15";

    if (!data.lastname) error.lastname = "complete lastname";
    else if (!onlyLetter.test(data.lastname))
      error.lastname = "Only letter without space";
    else if (data.lastname?.length < 4 || data.lastname?.length > 15)
      error.lastname = "Min:4 Max:15";

    if (!data.date) error.date = "Complete the field date";
    return error;
  };

  function invalidAdd(inputs) {
    let error = validate(inputs);
    if (error.name || error.lastname || error.date) return true;
  }

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnsubmit = (e) => {
    e.preventDefault(e);
    if (invalidAdd(input)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete the required field.',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    } else {
      //-------por error en la ruta al back-----------------------
      let invertir = {
        name: input.name,
        date: input.date,
        lastname: input.lastname,
        id: input.id,
      };
      //-------por error en la ruta al back--------------------------
      dispatch(asynUpdateUser(invertir));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'added profile info!',
        showConfirmButton: false,
        timer: 1500
      })
      setInput({
        name: "",
        date: "",
        lastname: "",
        id: 0,
      });
      history.push("/profile");
    }
  };

  return (
    <div className="container-general">
      <Navbar />
      <div>
        <div className="cards-form">
          <div className="marcoForm">
            <div className="img">
              <img src={userDB?.picture} className="picPerfil1" alt="poster" />
            </div>
            <div className="name">
              <h3 className="nameUser"> Welcome {userDB?.name}!</h3>
            </div>
            <div>
              <p className="nameUser">Complete your profile to have a better experience!</p>
            </div>
            <div className="card-bodysform">
              <form action="" onSubmit={handleOnsubmit}>
                <div className="form-group">
                  <div className="textInpuraper">
                    <p className="category"><b>Name</b></p>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      className="textInput"
                      placeholder="name"
                      onChange={handleOnChange}
                      autoFocus
                    />
                    {validate(input).name ? (
                      <p className="danger">{validate(input).name}</p>
                    ) : (
                      <p className="validate-field">{"✔️"}</p>
                    )}
                  </div>
                </div>

                <p className="category"><b>Last Name</b></p>
                <div className="form-group">
                  <div className="textInputWrapper">
                    <input
                      type="text"
                      name="lastname"
                      value={input.lastname}
                      className="textInput"
                      placeholder="lastname"
                      onChange={handleOnChange}
                    />
                    {validate(input).lastname ? (
                      <p className="danger">{validate(input).lastname}</p>
                    ) : (
                      <p className="validate-field">{"✔️"}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <div className="textInputWrapper">
                    <p className="category"><b>Date</b></p>
                    <input
                      type="date"
                      name="date"
                      className="textInput"
                      placeholder="Date of Birth"
                      onChange={handleOnChange}
                      autoFocus
                      max={currentDate} //no puede colocar una fecha mayor a la del dia actual
                    />
                    {validate(input).date ? (
                      <p className="danger">{validate(input).date}</p>
                    ) : (
                      <p className="validate-field">{"✔️"}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button className="button-update-profile" type="submit">
                    finished
                  </button>
                </div>
              </form>
              <Link to={"/home"}>
                <button className="button-update-profile">Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
