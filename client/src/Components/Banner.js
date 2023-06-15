import React from 'react';
import bannerImage from './images/banner.jpg';
import './Stylesheets/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
    </div>
  );
}

export default Banner;
