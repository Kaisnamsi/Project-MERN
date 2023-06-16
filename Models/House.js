const mongoose = require('mongoose');

const HouseSchema = mongoose.Schema({

    province: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    isSaleOrRent: { type: String, required: true },
    numOfBedRooms: { type: Number, required: true },
    numOfBathRooms: { type: Number, required: true },
    numOfGarages: { type: Number, required: true },
     houseImage: { type: String, required: true } 
});

const House = mongoose.model('House', HouseSchema);
module.exports = { House };
