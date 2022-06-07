import React, { useState, useEffect } from 'react';
import Home from './pages/home/Home.js'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage.js';

function App() {
  const [admin,setAdmin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem('Admin') === 'true') {
      setAdmin(true)
    }
  });

  return (

    <Router>
    <div className="app">
      <Routes>
        <Route path="/login" element={<><LoginPage/></>}/>
        <Route path="home" element={admin === true ? <><Home/></> : <><LoginPage/></>}/>
        <Route path="*" element={admin === true ? <><Home/></> : <><LoginPage/></>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
