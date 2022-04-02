const router = require('express').Router();
const { Plant, Zone, Sunshine } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const plantData = await Plant.findOne({
      where: {
        id: req.params.id
      },
      include: [Zone, Sunshine]
    });

    const plant = plantData.get({ plain: true });

    res.render('view-plant', {
      plant,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
