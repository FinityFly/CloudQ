import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Auth0Provider} from '@auth0/auth0-react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clinetId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Auth0Provider 
      domain='dev-bn5zplwa13e6kgxe.us.auth0.com'
      clientId='51uvIwxoU93Jk9BHZbTZH7sGUYwwSVFy'
      authorizationParams={{ redirect_uri: window.location.origin }} // This is where you set the redirect URI

    >
      <App />
    </Auth0Provider>
  </StrictMode>
  
);
