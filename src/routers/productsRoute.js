const express = require('express');
const productsController = require('../controllers/productsController');

const productRoute = express.Router();

productRoute.get('/', productsController.getAll);
productRoute.get('/:id', productsController.getById);
productRoute.post('/', productsController.insert);


module.exports = productRoute;