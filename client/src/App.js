import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

//components
import LandingPage from './components/Landing/Landing';
import Home from './components/Home/Home';
import Profile from "./components/User/Profile";

//boostrap
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./components/Detail/Detail";



function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/details/:id" component={Detail}/>
        </Switch>
    </div>
  );
}

export default App;
