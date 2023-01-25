const salesModel = require('../models/salesModel');

// const insertSales = async (arrayProducts) => {
//   console.log('insertSales', arrayProducts);
//   const sales = await salesModel.insertSales(arrayProducts);

//   return { type: 201, message: sales };
// };

const getAll = async () => {
  const sales = await salesModel.getAll();
  const formattedSales = sales.map((sale) => ({
    saleId: sale.sale_id,
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));
  return formattedSales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);
  if (sales.length === 0) {
    return {
      error: {
        code: 404,
        message: 'Sale not found',
      },
    };
  }
  const mapSale = sales.map((sale) => ({
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));
  return mapSale;
};

module.exports = {
  // insertSales,
  getAll,
  getById,
};