// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
// Add other routes as needed (GET, PUT, DELETE)

module.exports = router;
