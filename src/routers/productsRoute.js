const express = require('express');
const productsController = require('../controllers/productsController');
const { validationProducts } = require('../middlewares/validationProducts');

const productRoute = express.Router();

productRoute.get('/', productsController.getAll);
productRoute.get('/:id', productsController.getById);
productRoute.post('/', validationProducts, productsController.insert);


module.exports = productRoute;