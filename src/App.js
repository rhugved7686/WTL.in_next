// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home';
import { Dates } from './Components/Dates';
import { AboutMahaKumbh } from './Components/AboutMahaKumbh';
import { KumbhTourPackage } from './Components/KumbhTourPackage';
import { KumbhContact } from './Components/KumbhContact';
import { Ashtavinayak } from './Components/Ashtavinayak';
import { AboutAshtavinayak } from './Components/AboutAshtavinayak';
import { AshtavinayakTourPackages } from './Components/AshtavinayakTourPackages';
import { ContactAshtavinayak } from './Components/ContactAshtavinayak';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/About" element={<AboutMahaKumbh />} />
            <Route path="/TourPackages" element={<KumbhTourPackage />} />
            <Route path="/Contact" element={<KumbhContact />} />
            <Route path="/Ashtavinayak" element={<Ashtavinayak />} />
            <Route path="/AboutAshtavinayak" element={<AboutAshtavinayak />} />
            <Route path="/TourPackagesAshtavinayak" element={<AshtavinayakTourPackages />} />
            <Route path="/ContactAshtavinayak" element={<ContactAshtavinayak />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
