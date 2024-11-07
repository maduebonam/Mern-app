const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/userController');

// Define routes for creating and fetching users
router.post('/', createUser);   // POST /api/users - Create a new user
router.get('/', getUsers);      // GET /api/users - Get all users

module.exports = router;
