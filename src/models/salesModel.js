const connection = require('./connection');

const newSaleDate = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES(NOW())',
  );
  return insertId;
};

const insertSales = async (arrayProducts) => {
  const insertId = await newSaleDate();
  const q = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quant) VALUES (?, ?, ?)';
  const insertProduct = await Promise.all(
    arrayProducts.map(async (i) => {
      await connection.execute(q, [insertId, i.productId, i.quant]);
      return i;
    }),
  );

  const products = {
    id: insertId,
    itemsSold: insertProduct,
  };

  return products;
};

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity 
    FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products
    ON sales.id = sales_products.sale_id`,
  );
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity 
    FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products
    ON sales.id = sales_products.sale_id
    HAVING sale_id = ?`,
    [id],
  );
  return result;
};

module.exports = {
  insertSales,
  getAll,
  getById,
};