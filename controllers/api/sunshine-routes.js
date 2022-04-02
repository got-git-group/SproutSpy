const router = require('express').Router();
const { Sunshine } = require('../../models');
const logger = require('../../utils/logger');

router.get('/:name', async (req, res) => {
  logger.info('GET request to /api/sunshines/name');
  try {
    const sunshineData = await Sunshine.findOne({
      where: {
        sunshinename: req.params.name
      }
    });

    if (sunshineData) {
      res.status(200).json(sunshineData);
    } else {
      res.status(400).json({ message: 'Could not retrieve sunshines' });
    }
  } catch (err) {
    logger.error(err);
    res.status(400).json({ message: err });
  }
});

module.exports = router;
