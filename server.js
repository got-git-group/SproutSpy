const express = require('express');

const app = express();

// Temporary for PORT remove when the config is read in
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ToDo: Add wrapper for sequelize when DB connection is set up
app.listen(PORT, () => {
  console.log(`App started and listening on port ${PORT}`);
});
