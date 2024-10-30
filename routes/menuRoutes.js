// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.post('/', menuController.addMenuItem);
// Add other routes as needed

module.exports = router;
