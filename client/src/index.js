import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

ReactDOM.render(
  <Auth0Provider
  domain="bf2344.us.auth0.com"
  clientId="2kTSNwHhvrnK62M22s3YMGiilT25x9HP"
  redirectUri="https://localhost:3000"
>
  <App />
</Auth0Provider>,
  document.getElementById('root')
);
