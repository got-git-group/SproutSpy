const router = require('express').Router();
// do we need to import a model? I don't think so if this is a static page.

router.get('/', async (req, res) => {
    try {
        // what goes here? It's a static page and shouldn't require searching a model from the database. Unless we add the glossary to the db.
        // Does anything else need to be rendered? I think not if we aren't pulling anything from the db.
        res.render('glossary', {
            loggedIn: req.session.loggedIn,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;