const express = require('express');
const salesController = require('../controllers/salesController');
const {
  validationProdId,
  validationQuat,
  validationQuatNumber,
  validationOneQuat } = require('../middlewares/validationSales');

const salesRoute = express.Router();

salesRoute.post('/',
  validationProdId,
  validationQuat,
  validationQuatNumber,
  validationOneQuat,
  salesController.insertSales);
  
salesRoute.get('/', salesController.getAll);
salesRoute.get('/:id', salesController.getById);

module.exports = salesRoute;