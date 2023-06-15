const express = require('express');
const cors = require('cors');
const app = express();
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
// MIDDLEWARES
app.use(cors());
app.use(express.json()); // {"name": "John Doe", age: 25}
app.use(express.urlencoded({ extended: false })); // name=JohnDoe&age=25
// app.post('/uploads', upload.single('houseImage'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
// })
// Route Constants
const houseListingRoutes = require('./Routes/HouseListing/HouseListing.js');
const houseFetchRoute = require('./Routes/HouseFetchRoutes/HouseFetch.js');

// Use HouseListing route
app.use(houseListingRoutes);
app.use(houseFetchRoute);

// SERVER ENTRY
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
