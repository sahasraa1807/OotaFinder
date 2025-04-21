// backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Define an endpoint to fetch restaurant data
app.get('/restaurants', async (req, res) => {
  try {
    const response = await axios.get('https://6806608fe81df7060eb6f24b.mockapi.io/');
    res.json(response.data); // Send the response data to the client
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
