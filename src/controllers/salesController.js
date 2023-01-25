const salesService = require('../services/salesService');

// const insertSales = async (req, res) => {
//   const { body } = req;

//   const { type, message } = await salesService.insertSales(body);

//   return res.status(type).json(message);
// };

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  if (sale.error) {
    return res.status(404).json(sale.error);
  }
  res.status(200).json(sale);
};

module.exports = {
  // insertSales,
  getAll,
  getById,
};