const router = require('express').Router();

router.get('/', (req, res) => (res.send('Hello World')));

router.use('/users', require('../controllers/users'));

router.get('/', user)

module.exports = router;