const router = require('express').Router();

const apiRoutes = require('./api');
const glossaryRoutes = require('./glossary-routes');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/glossary', glossaryRoutes);
router.use('/api', apiRoutes);

module.exports = router;