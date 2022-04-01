const router = require('express').Router();

// importing the various api routes
const userRoutes = require('./user-routes');
// const resultsRoutes = require('./results-routes');
const plantRoutes = require('./plant-routes');

const sunshineRoutes = require('./sunshine-routes');

router.use('/user', userRoutes);
// router.use('/results', resultsRoutes);
router.use('/plants', plantRoutes);
router.use('/sunshines', sunshineRoutes);

module.exports = router;
