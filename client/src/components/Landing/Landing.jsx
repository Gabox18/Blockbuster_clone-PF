import React,{useState} from "react";
// import Login from "../Log in/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import './Landing.css';
import { useDispatch } from 'react-redux';


export default function Landing() {

    const dispatch = useDispatch()
    const [user,setUser] = useState();
    const [password, setPassword] = useState();
    function handleOnChange(e){
        console.log('input ->', e.target.value);
        setUser(e.target.value)
        setPassword(e.target.value)
    }
    function handleOnSubmit(e){
        e.preventDefault(e)
        dispatch('dispatch del login')//corregir
        console.log('se mando hadleSubmit!');
    }


  return (
      <div>
        {/* <Login/> */}
        <div className="maincontainer">
            <div className="container-fluid">
                <div className="row no-gutter">

                    <div className="col-md-6 d-none d-md-flex bg-image"></div>

                    <div className="col-md-6 bg-light">
                        <div className="login d-flex align-items-center py-5">

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 mx-auto">
                                        <h3 className="display-4">Blockbuster Henry</h3>
                                        <p className="text-muted mb-4">Enter valid user:</p>
                                        <form>
                                            <div className="mb-3">
                                                <input
                                                    id="inputEmail"
                                                    type="text"
                                                    placeholder="User address"
                                                    required=""
                                                    autofocus=""
                                                    className="form-control rounded-pill border-0 shadow-sm px-4"
                                                    onChange={handleOnChange}
                                                    value={user}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input 
                                                    id="inputPassword" 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    required="" 
                                                    className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                                    onChange={handleOnChange}
                                                    value={password}
                                                />
                                            </div>
                                            <div className="form-check">
                                                <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                                <label for="customCheck1" className="form-check-label">Remember password</label>
                                            </div>
                                            <div className="d-grid gap-2 mt-2">
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                                    onSubmit={handleOnSubmit}
                                                >
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}
