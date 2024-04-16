import React, { useCallback, useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { ImportsNotUsedAsValues } from 'typescript';
// import Alert from './components/Alert';
import About from './components/About';

import {

  BrowserRouter as Router,

  Switch,

  Route,

  

} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  const [mode, setMode] = useState('light');
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();    
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {

      setMode("dark");

      document.body.style.backgroundColor = "#042743"

      document.body.style.color = "white"


    } else {

      setMode("light");

      document.body.style.backgroundColor = "white"

      document.body.style.color = "black"


    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert = {alert}/> */}
        <div className="container my-3 ">
        
        <Switch>
          <Route path="/about">
          <About  mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm heading="Try TextUtils- word counter,character counter"  mode={mode} />
          </Route>
          </Switch>
          
    
        </div>
        </Router>
    </>
  );
}

export default App;
