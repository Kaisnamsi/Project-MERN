const express = require('express');
const cors = require('cors');
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Constants
const houseListingRoutes = require('./Routes/HouseListing/HouseListing.js');
const houseFetchRoute = require('./Routes/HouseFetchRoutes/HouseFetch.js');

// Use HouseListing route
app.use(houseListingRoutes);
app.use(houseFetchRoute);

// Contact Form Submission Endpoint
app.post('/api/contact', (req, res) => {
  const { email, subject, message } = req.body;

  // Perform desired actions with the form data
  // For example, save it to MongoDB Atlas or send an email

  // Send a response back to the client
  res.status(200).json({ message: 'Contact form submitted successfully' });
});

// SERVER ENTRY
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
