import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './Components/Mainpage';
import React, { useState, useEffect } from 'react';
import Loading from './Components/LoadingComponent';
import Home from './Components/Home'
// import UploadeFile from './Components/UploadeFile';
// import UploadForm from './Components/UploadeFile';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const logintimeout = 5000; // time out 


  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }), []

  return (

    <div className='App'>
      {/* {isLoading ? (<Loading />) : (
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Mainpage />} />
              <Route path="Register" element={<Registration />} />
              <Route path="Login" element={<Login setIsLoading={setIsLoading} logintimeout={logintimeout} />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>

      )} */}
      {/* <UploadeFile/> */}
      {/* <UploadForm/> */}
      <Home/>
    </div>

  );
}

export default App;
