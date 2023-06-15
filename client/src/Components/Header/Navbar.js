import React from 'react';
import logo from '../images/images.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to='/house-sale' className='link'>For Sale</Link>
          </li>
          <li>
            <Link to='/house-rent' className='link'>To Rent</Link>
          </li>
          <li>
            <Link to='/list-your-property' className='link'>Sell Your Property</Link>
          </li>
          <li>
            <a href='/contact-us' className='link'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
