const router = require('express').Router();
const { Plant, Zone, Sunshine } = require('../../models');
const withAuth = require('../../utils/auth');
const logger = require('../../utils/logger');

router.get('/', async (req, res) => {
  logger.info('GET request to /api/plants');
  try {
    const plantData = await Plant.findAll({ include: [Zone, Sunshine] });

    if (plantData) {
      res.status(200).json(plantData);
    } else {
      res.status(400).json({ message: 'Could not retrieve plants' });
    }
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err });
  }
});

router.post('/', withAuth, async (req, res) => {
  logger.info('POST request to /api/plants');
  try {
    const plantData = await Plant.create(req.body);

    if (plantData) {
      res.status(200).json(plantData);
    } else {
      res.status(400).json({ message: 'Could not create plant' });
    }
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  logger.info('GET request to /api/plants/:id');
  try {
    const plantData = await Plant.findOne(
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (plantData) {
      res.status(200).json(plantData);
    } else {
      res.status(400).json({ message: 'Could not retrieve ID' });
    }
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err });
  }
});

module.exports = router;
