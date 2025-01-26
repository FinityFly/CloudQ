import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {Auth0Provider} from '@auth0/auth0-react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clinetId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const root = ReactDOM.createRoot(document.getElementById("root")!);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

root.render(
  <StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }} // This is where you set the redirect URI

    >
      <App />
    </Auth0Provider>
  </StrictMode>
  
);
