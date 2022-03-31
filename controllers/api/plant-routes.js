const router = require('express').Router();
const { Plant } = require('../../models');

router.get('/', async (req, res) => {
  try {
    
    const plantData = await Plant.findAll();

    if (plantData) {
        res.status(200).json(plantData);
    } else {
        res.status(400).json({ message: 'Could not retrieve plants'});
    };

  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
