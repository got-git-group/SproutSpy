const router = require('express').Router();

const apiRoutes = require('./api');
const glossaryRoutes = require('./glossary-routes');
const homeRoutes = require('./home-routes');
const results = require('./results-routes');
const plant = require('./plant-routes');

router.use('/', homeRoutes);
router.use('/glossary', glossaryRoutes);
router.use('/api', apiRoutes);
router.use('/results', results);
router.use('/plant', plant);

module.exports = router;
