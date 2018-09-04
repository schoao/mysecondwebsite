const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('contact', { title: 'Blinky-Lite: Contact' });
});

module.exports = router;
