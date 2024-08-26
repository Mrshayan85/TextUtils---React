import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import React, { useState } from 'react';
import Aboutus from './components/Aboutus';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const HandlerTargetFn = (event) => {
    const value = event.target.value;
    setColor(value);
  console.log(value,color)
if(value === "dark"){
  document.body.style.backgroundColor = '#7F8389'
  document.body.style.color = 'white' 
  showAlert("Theme changed to Dark","dark");
}
if(value === "danger"){
  document.body.style.backgroundColor = '#ec4c50'
  document.body.style.color = 'white' 
  showAlert("Theme changed to Red","danger");  }

  if(value === "light"){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    showAlert("Theme changed to Light","success");
  }
};

  const [color, setColor] = useState(); 
  const [alert, setAlert] = useState(null); 
  
  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
  } 
  return (
    <> 
    <Router>
  <Navbar titleName = "Text Converter"  showAlert = {showAlert} color = {color} HandlerTargetFn = {HandlerTargetFn} /> 
  <Alert alert  = {alert}/>
  <Routes>
      <Route exact path="/aboutus" element={<Aboutus />} />
      <Route exact path="/" element={<Form heading="Enter your text to convert" showAlert={showAlert} color={color} />} />
    </Routes>
        </Router>
    </>
  );
}

export default App;
