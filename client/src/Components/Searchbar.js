import React from 'react';
import searchIcon from '../Components/images/search-icon.png';
import './Stylesheets/Searchbar.css';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <h2>Find Your Ideal Home</h2>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
      <div className="filter-container">
        <span>Filter by Province:</span>
        <select>
          <option value="">All Provinces</option>
          <option value="Gafsa">Gafsa</option>
          <option value="Tunis">Tunis</option>
          <option value="Sfax">Sfax</option>
          <option value="Sousse">Sousse</option>
          <option value="Nabel">Nabel</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
