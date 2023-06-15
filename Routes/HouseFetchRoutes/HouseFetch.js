const router = require('express').Router();
const { response } = require('express');
const  {House} = require('../../Models/House.js');

// HOUSE FETCHING ROUTES

router.get('/api/house-sale', async (request, response) => {
    try {
      House.find({ "isSaleOrRent": 'SALE' })
        .exec()
        .then((data) => {
          return response.status(200).json(data);
        });
    } catch (error) {
      return response.status(500).json({ msg: "Server is currently down" });
    }
  });
  
  router.get('/api/house-rent', async (request, response) => {
    try {
      House.find({ "isSaleOrRent": 'RENT' })
        .exec()
        .then((data) => {
            console.log(data);
          return response.status(200).json(data);
        });
    } catch (error) {
      return response.status(500).json({ msg: "Server is currently down" });
    }
  });
  
  module.exports = router;