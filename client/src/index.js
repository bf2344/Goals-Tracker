import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="bf2344.us.auth0.com"
    clientId="2kTSNwHhvrnK62M22s3YMGiilT25x9HP"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// create goals page, CSS to make each goal section expand the page on click 

// models - user, goals - progress

//