import React, { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Footer from './Containers/Footer';
import Header from './Containers/Header';
import Home from './Containers/Home';


export const userSearch = createContext();


function App() {
  const [value, setValue] = useState('');

  return (
    
    <BrowserRouter>
    <userSearch.Provider value={{value, setValue}}>
    <Header />
    <Routes>
        <Route index element={<Home />} />
    </Routes>
    <Footer />
    </userSearch.Provider>
  </BrowserRouter>
  );
}

export default App;
