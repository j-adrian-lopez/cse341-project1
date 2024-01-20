const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// create a new user
router.post('/', usersController.createUser);

// update a contact
router.put('/:id', usersController.updateUser);

// delete a contact
router.delete('/:id', usersController.deleteUser);

module.exports = router;
