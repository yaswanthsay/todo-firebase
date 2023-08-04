import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <React.StrictMode>
   <Auth0Provider
   domain="dev-ea7izx8xhdt8420r.us.auth0.com"
   clientId="p3KzlGn87RxcuScMDOEHob0vbLkGJ0im"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
   </Auth0Provider>
   // </React.StrictMode>
);


