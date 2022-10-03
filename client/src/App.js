import React, { useEffect } from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';

//components
import LandingPage from './components/Landing/Landing';
import Home from './components/Home/Home';
import Profile from "./components/User/Profile";

import Exile from "../src/components/Exile/Exile"

import Play from './components/Detail/Play/Play';


//boostrap
// You can specify which plugins you need
//import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./components/Detail/Detail";
import Form from "./components/User/Form/FormUpdateUser";
import ViewResult from "./components/Home/ViewResult";
import adminPanel from "./components/Admin Panel/AdminPanel";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUser } from "./redux/slice";
import { useAuth0 } from "@auth0/auth0-react";
import SilverPayZone from "./components/PayZone/SilverPayZone";
// Profile
// import prfofile from "./components/Profile/Profile"



function App() {
  const { user } = useAuth0();
  let userDB = useSelector(state=>state.alldata.user)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetUser(user?.email))
  }, [dispatch, user]);
  return (
    <div className="App">
      {userDB.status === false
        ?<Exile/>
        :<Switch>
          <Route exact path="/" component={LandingPage}/>
          {/*<Route exact path="/Exile" component={exile}/>*/}
          <Route exact path="/Home" component={Home}/>
          <Route exact path= "/profile/Form" component={Form} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/Home/result" component={ViewResult}/>
          <Route exact path="/details/:id" component={Detail}/>
          <Route exact path="/details/:id/play" component={Play}/>
          <Route exact path="/Home/admin" component={adminPanel}/>
          <Route exact path="/silver" component={SilverPayZone}/>
        </Switch>}
    </div>
  );
}

export default App;
