const router = require('express').Router();

const apiRoutes = require('./api');
const glossaryRoutes = require('./glossary-routes');
const homeRoutes = require('./home-routes');
const results = require('./results-routes');

router.use('/', homeRoutes);
router.use('/glossary', glossaryRoutes);
router.use('/api', apiRoutes);
router.use('/results', results);

module.exports = router;
