const router = require('express').Router();

router.get('/', (req, res) => (res.send('Adrian Lopez')));

router.use('/users', require('./users'));

module.exports = router;
