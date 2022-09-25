import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//------------------------------------------------
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "agus-mollo.us.auth0.com"//process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = "gE7IfTfHrYq0Wy3GeDGrrEPEI9DUiIax"//process.env.REACT_APP_AUTH0_CLIENT_ID;
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={`${window.location.origin}/home`}>
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
