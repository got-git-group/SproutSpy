const router = require('express').Router();
const { Plant, Zone, Sunshine } = require('../../models');
const { sequelize } = require('../../models/User');
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

router.post('/', async (req, res) => {
  logger.info(`POST request to /api/plants with ${JSON.stringify(req.body)}`);
  const bodyZones = req.body.zones;
  const zoneNames = bodyZones.map(zone => zone.zonename);
  const bodySunshines = req.body.sunshine;
  try {
    const plantData = await Plant.create(req.body);
    const sunshine = await Sunshine.findOne({
      where: {
        sunshinename: bodySunshines[0].sunshinename
      }
    });
    const zones = await Zone.findAll({
      where: {
        zonename: zoneNames
      }
    });

    const zoneIds = zones.map((zone) => zone.id);
    const sunshineId = sunshine.id;

    await sequelize.query(`INSERT INTO PlantSunshine (plant_id, sunshine_id, created_at, updated_at) VALUES (${plantData.id}, ${sunshineId}, '2022-03-31 16:37:08', '2022-03-31 16:37:08')`);

    for (let i = 0; i < zoneIds.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await sequelize.query(`INSERT INTO PlantZone (plant_id, zone_id, created_at, updated_at) VALUES (${plantData.id}, ${zoneIds[i]}, '2022-03-31 16:37:08', '2022-03-31 16:37:08')`);
    }

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
