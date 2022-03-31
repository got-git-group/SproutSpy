const router = require('express').Router();
const { Plant } = require('../../models');
const withAuth = require('../../utils/auth.js')

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

router.post('/', async (req, res) => {
    try {
      
      const plantData = await Plant.create(req.body);
  
      if (plantData) {
          res.status(200).json(plantData);
      } else {
          res.status(400).json({ message: 'Could not create plant'});
      };
  
    } catch (err) {
      res.status(400).json({ message: err });
    }
  });


module.exports = router;
