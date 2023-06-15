const express = require('express');
const router = express.Router();
const { House } = require('../../Models/House');
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Config:
const mongoURI = process.env.MONGO_URI;

// MongoDB Connection
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Set the destination folder where the uploaded files will be stored
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     // Set the filename for the uploaded file
//     cb(null, file.originalname);
//   },
// });



router.post('/api/house-listing',async (req, res) => {
  console.log(req.body)
  const {
    price,
    city,
    province,
    numOfBedRooms,
    numOfBathRooms,
    numOfGarages,
    isSaleOrRent,
     houseImage,
  } = req.body;

  // if (!houseImage) {
  //   console.error('No house image found');
  //   return res.status(400).json({ error: 'No house image provided' });
  // }

  console.log('PRICE: ', price);
  console.log('PROVINCE: ', province);
  console.log('city: ', city);
  console.log('numOfBedrooms: ', numOfBedRooms);
  console.log('numOfBathrooms: ', numOfBathRooms);
  console.log('numOfGarages: ', numOfGarages);
  console.log('isSaleOrRent: ', isSaleOrRent);
   console.log('houseImage: ', houseImage);

  const house = await House.create({
    price, province, city,numOfBedRooms,numOfBathRooms,numOfGarages,isSaleOrRent,houseImage
  });
  res.status(201).json(house);
})
module.exports = router;
