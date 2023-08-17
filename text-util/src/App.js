import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Textform from './component/Textform';
import Navbar from './component/Navbar';
//import Switch from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const togglemode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
  <>
  <Router>
<Navbar title="TextUtil" About="About us" mode={mode} togglemode={togglemode}/>
<div className='container'>
<Routes>
      <Route path="/about" element=
      {<About />}>
        </Route>
      <Route path="/" element={<Textform heading="Enter text to analyze below"/>
}>
        </Route>
</Routes>


  </div>
  </Router>
  </>
  );
}

export default App;
