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

const checkProducts = async (id) => {
  const product = await productsModel.getById(id);
  return !!product;
};

const update = async (id, name) => {
  const checked = await checkProducts(id);
  if (!checked) {
    return {
      type: 'NOT_FOUND',
      message: 'Product not found',
    };
  }
  await productsModel.update(id, name);
  return {
    type: null,
    message: {
      id,
      name,
    },
  };
};

const deleteProd = async (productId) => {
  const del = await productsModel.deleteProd(productId);
  // affectedrows com ajuda do stackoverflow
  if (del.affectedRows === 0) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: '' };
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  deleteProd,
};