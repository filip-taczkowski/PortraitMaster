const mongoose = require('mongoose');

// func for loading example data
const loadTestData = require('./testData');

const connectToDB = () => {

  // connect to DB
  mongoose.connect('mongodb://localhost:27017/photosDB', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Connected to the database');
    loadTestData();
  });

  // on error
  db.on('error', (err) => console.log('Error ' + err));
}

module.exports = connectToDB;