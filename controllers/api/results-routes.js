const router = require('express').Router();
// list whichever models we need to import here.
// const { Plants } = require('../models');

// does this route need to have params based on the zone?
router.get('/', async (req, res) => {
  try {
    // something like the below, could be findAll maybe.
    // const plantData = await Plants.findByPk(req.params.id);
    // const plants = plantData.map((plant) => plant.get({plain: true}));
    res.render('results', {
      // plants,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
