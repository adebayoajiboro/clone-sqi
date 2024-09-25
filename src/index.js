import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import Letstart from './Letstart';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import LeftDiv from './LeftDiv';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './Dashboard';
import Errorpage from './Errorpage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Letstart/> */}
    {/* <Section1/>
    <Section2/>
    <LeftDiv/>
    <Dashboard/> */}
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>



  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
