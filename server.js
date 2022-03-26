const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App started and listening on port ${PORT}`);
    });
  });
