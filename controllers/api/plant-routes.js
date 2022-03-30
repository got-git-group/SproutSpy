const router = require('express').Router();
const { Plants } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const plants = [{
            id: 4,
            plantname: "potato",
            space: "1-2in"
        },
        {
            id: 3,
            plantname: "cactus",
            space: "3ft"
        },
        {
            id: 2,
            plantname: "dandelion",
            space: "8in"
        }];
        res.status(200).json(plants);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

module.exports = router;
