const router = require('express').Router();
const { Plant, Zone, Sunshine } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const zoneData = await Zone.findAll({
      where: {
        zonename: `zone ${req.params.id}`,
      },
      include: [
        {
          model: Plant,
          through: 'PlantZone'
        }
      ]
    });

    const zones = zoneData.map((zone) => zone.get({ plain: true }));
    console.log(zones);

    res.render('results', {
      zones,
      // loggedIn: req.session.loggedIn
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;