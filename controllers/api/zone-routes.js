const router = require('express').Router();
const { Zone } = require('../../models');
const logger = require('../../utils/logger');

router.get('/:name', async (req, res) => {
  logger.info('GET request to /api/zones/name');
  try {
    const zoneData = await Zone.findOne({
      where: {
        zonename: req.params.name
      }
    });

    if (zoneData) {
      res.status(200).json(zoneData);
    } else {
      res.status(400).json({ message: 'Could not retrieve zones' });
    }
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err });
  }
});

module.exports = router;
