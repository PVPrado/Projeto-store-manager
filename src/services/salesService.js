const salesModel = require('../models/salesModel');

const insertSales = async (arrayProducts) => {
  const sales = await salesModel.insertSales(arrayProducts);

  return { type: 201, message: sales };
};

module.exports = {
  insertSales,
};