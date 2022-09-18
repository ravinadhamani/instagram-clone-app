/* import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Messages from './Components/Messages/Messages';
import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}>
            <Route path="./Components/Login/Login.js" element={<Login/>} />
           
            <Route exact path="./Components/Messages/Messages.js" element={<Messages />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
 */

import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Messages from "./Components/Messages/Messages";
import Login from './Components/Login/Login';
import { AuthProvider } from './contexts/AuthContext';


function App() {

  return (

    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;