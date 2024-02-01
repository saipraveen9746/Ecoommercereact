import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Productdetails from '../Components/Productdetaills/Productdetails';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';


function RoutesLayout() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Productdetails />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default RoutesLayout;