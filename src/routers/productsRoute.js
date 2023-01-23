const express = require('express');
const productsController = require('../controllers/productsController');

const productRoute = express.Router();

productRoute.get('/', productsController.getAll);
productRoute.get('/:id', productsController.getById);

module.exports = productRoute;