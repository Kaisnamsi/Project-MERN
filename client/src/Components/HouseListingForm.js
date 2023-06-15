import React, { useState } from "react";
import "./Stylesheets/HouseListingForm.css";
import axios from 'axios';

const HouseListingForm = () => {
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [numOfBedRooms, setNumOfBedRooms] = useState("");
  const [numOfBathRooms, setNumOfBathRooms] = useState("");
  const [numOfGarages, setNumOfGarages] = useState("");
  const [isSaleOrRent, setIsSaleOrRent] = useState("");
  const [houseImage, setHouseImage] = useState("");
  const listProperty = () => {
    const url = "/api/house-listing";
    const data = {
      price,
      city,
      province,
      numOfBedRooms,
      numOfBathRooms,
      numOfGarages,
      isSaleOrRent,
      houseImage
    };

    axios.post(url, data, { timeout: 5000 })
      .then(response => {
        console.log(response.data);
        // Process the response or show success message to the user
      })
      .catch(error => {
        console.log(error);
        if (error.response) {
          // The request was made and the server responded with a status code outside the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log('Error', error.message);
        }
        // Show an error message to the user
      });
  };
  
  return (
    <div className="HouseListing_Container">
      <div className="form">
        <label>House Price</label>
        <input
          type="number"
          placeholder="House Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <label>House Location (Province)</label>
        <input
          type="text"
          placeholder="House Location"
          onChange={(e) => setProvince(e.target.value)}
          value={province}
        />
        <label>House Location (City)</label>
        <input
          type="text"
          placeholder="House Location"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <label>Sale or Rent</label>
        <select
          onChange={(e) => setIsSaleOrRent(e.target.value)}
          value={isSaleOrRent}
        >
          <option>...</option>
          <option value="SALE">SALE</option>
          <option value="RENT">RENT</option>
        </select>
        <label>Number of Bedrooms</label>
        <input
          type="number"
          placeholder="Number of bedrooms"
          onChange={(e) => setNumOfBedRooms(e.target.value)}
          value={numOfBedRooms}
        />
        <label>Number of Bathrooms</label>
        <input
          type="number"
          placeholder="Number of bathrooms"
          onChange={(e) => setNumOfBathRooms(e.target.value)}
          value={numOfBathRooms}
        />
        <label>Number of Garages</label>
        <input
          type="number"
          placeholder="Number of garages"
          onChange={(e) => setNumOfGarages(e.target.value)}
          value={numOfGarages}
        />
        <input
        type="url"
        placeholder="image"
        onChange={(e)=> setHouseImage(e.target.value)}
        value={houseImage}
        />
        <button onClick={listProperty}>LIST YOUR PROPERTY</button>
      </div>
    </div>
  );
};

export default HouseListingForm;
