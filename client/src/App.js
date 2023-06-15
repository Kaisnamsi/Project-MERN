import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Banner from './Components/Banner';
import Navbar from './Components/Header/Navbar';
import Searchbar from './Components/Searchbar';
import HouseListingForm from './Components/HouseListingForm';
import ForSale from './Components/ForSale';
import ForRent from './Components/ForRent';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Searchbar /><Banner /></div>} />
          <Route path="/house-sale" element={<div><ForSale /></div>} />
          <Route path="/house-rent" element={<div><ForRent /></div>} />
          <Route path="/list-your-property" element={<div><HouseListingForm /></div>} />
          <Route path="/contact-us" element={<div><Contact /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
