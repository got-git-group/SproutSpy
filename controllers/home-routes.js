const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/add-plant', async (req, res) => {
  if (req.session.loggedIn) {
    res.render('add-plant', {
      loggedIn: req.session.loggedIn
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
