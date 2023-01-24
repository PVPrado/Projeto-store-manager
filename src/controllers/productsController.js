const productsService = require('../services/productService');

const getAll = async (req, res) => {
  const { type, message } = await productsService.getAll();
  if (type) {
    return res.status(404).json(message);
  }
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);

  if (type) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
};

const insert = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.insert(name);

  if (type) return res.status(404).json({ message });

  res.status(201).json(message);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.update(id, name);
  if (type !== null) {
    return res.status(404).json({ message });
  }
  res.status(200).json(message);
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};