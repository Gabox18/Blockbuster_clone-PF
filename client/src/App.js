import React from "react";
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import LandingPage from './components/Landing/Landing';
import Home from './components/Home/Home';

//boostrap
// You can specify which plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./components/Detail/Detail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/details/:id" component={Detail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
