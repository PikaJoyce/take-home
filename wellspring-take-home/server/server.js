const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const path = require('path')


const patients = require('./patients');
const appointments = require('./appointments');

app.use(express.static('public'));
app.use(cors()); // Enable CORS for all routes

// API endpoint for recent patients list
app.get('/api/patients', (req, res) => {
  return res.status(200).json(patients)
});

// API endpoint for upcoming visits list
app.get('/api/appointments', (req, res) => {
  console.log('APPOINTMENTS: ', appointments)
  res.json(appointments)
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
