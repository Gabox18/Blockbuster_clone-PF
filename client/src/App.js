import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

//components
import LandingPage from './components/Landing/Landing';
import Home from './components/Home/Home';
import Profile from "./components/User/Profile";
import Play from './components/Detail/Play/Play';

//boostrap
// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./components/Detail/Detail";
import Form from "./components/User/Form/FormUpdateUser";
import ViewResult from "./components/Home/ViewResult";
import adminPanel from "./components/Admin Panel/AdminPanel";





function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/Home/result" component={ViewResult}/>
          <Route exact path="/details/:id" component={Detail}/>
          <Route exact path="/details/:id/play" component={Play}/>
          <Route exact path="/Home/admin" component={adminPanel}/>
          <Route exact path= "/infoprofile" component={Form} />
        </Switch>
    </div>
  );
}

export default App;
