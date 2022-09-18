import React  from "react";
import Logoutbutton from "../User/Logout";
import Profile from "../User/Profile";
import Searchbar from "./Search Bar/Searchbar";
import './Navbar.css';



function Navbar({setCurrentPage}){

    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light">Shopping</a>
                            </li>
                        </ul>
                        <Searchbar setCurrentPage={setCurrentPage}/>
                        <Logoutbutton/>
                        <Profile/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;