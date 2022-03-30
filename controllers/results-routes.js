const router = require('express').Router();
const { Plant, Zone, Sunshine } = require('../models');

router.get('/', async (req, res) => {
  try {
    const plantData = await Plant.findAll({});

    const plants = plantData.map((plant) => plant.get({ plain: true }));

    res.render('results', {
      plants,
      // loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
