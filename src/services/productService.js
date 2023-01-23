const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return { type: null, message: products };
};

const getById = async (id) => {
  const product = await productsModel.getById(id);

  if (!product) {
    return { type: true, message: 'Product not found' };
  }
  return { type: null, message: product };
};

const insert = async (product) => {
  const resultId = await productsModel.insert(product);
  const result = await productsModel.getById(resultId);

  return { type: null, message: result };
};

module.exports = {
  getAll,
  getById,
  insert,
};