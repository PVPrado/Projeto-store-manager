const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getById = async (id) => {
  const [[result]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  console.log(result);
  return result;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const update = async (id, body) => {
  const { name } = body;
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return result;
};

const deleteProd = async (productId) => {
  const [product] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [productId],
  );
  return product;
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  deleteProd,
};