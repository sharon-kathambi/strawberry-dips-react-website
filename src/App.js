import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/Sign-up';

function App() {
  return (
    //<div className="App">
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services/:id" element={<Services />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      </BrowserRouter>
      </>
    //</div>
  );
}

export default App;
