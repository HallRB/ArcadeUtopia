import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

ReactDOM.render(
  <BrowserRouter>
  <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>

  ,document.getElementById('root')
);

export default function Slideshow(){
    return (
        <section className="slideshow">
            Slideshow
        </section>
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
