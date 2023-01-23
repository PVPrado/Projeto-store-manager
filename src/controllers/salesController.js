const salesService = require('../services/salesService');

const insertSales = async (req, res) => {
  const { body } = req;

  const { type, message } = await salesService.insertSales(body);

  return res.status(type).json(message);
};

module.exports = {
  insertSales,
};