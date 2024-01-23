import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import AuthSection from './components/AuthSection';
import Footbar  from './components/Footbar';
import SignupForm from './components/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ControlledCarousel from './components/ControlledCarousel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
   <Navbar/>
    <AuthSection/>
    <ControlledCarousel></ControlledCarousel>
<SignupForm/>
<Footbar></Footbar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
