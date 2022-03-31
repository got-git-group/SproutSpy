const router = require('express').Router();
// import models needed - may not need User/Comments
const { Plant } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [{model: Sunshine, through: 'PlantSunshine'}, {model: Zone, through: 'PlantZone'}]
    });

    const plants = plantData.map((plant) => plant.get({ plain: true }));

    res.render('results', {
      plants,
      // loggedIn: req.session.loggedIn
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;