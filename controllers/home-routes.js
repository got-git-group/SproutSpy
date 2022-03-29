const router = require('express').Router();
const { User, Plant, Zone, Sunshine } = require('../models');

// do we need to import a model? I don't think so if this is a static page.

router.get('/', async (req, res) => {
  try {
    /* what goes here? It's a static page and shouldn't require
    searching a model from the database. Unless we add the glossary
    to the db. Does anything else need to be rendered? I think not
    if we aren't pulling anything from the db. */
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
