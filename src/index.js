import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-sf7dleg0ta6ozexo.us.auth0.com"
    clientId="riiV4euuw9eqMNHwpwfmnfQgbA6CpHFg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
   
  
);


