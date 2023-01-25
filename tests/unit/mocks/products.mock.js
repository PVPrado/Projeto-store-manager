const products = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const productsId = {
  id: 1,
  name: 'Martelo de Thor',
};

const returnProductsById = {
  type: null,
  message: productsId,
};

const MOCK_ID = 11111111111;

const errorProductsByid = {
  type: true,
  message: 'Product not found',
};

const errorIdMessage = { message: errorProductsByid.message };


const returnDeleteProduct = {
  type: null,
  message: '',
}

const errorInsertProduct = {
  type: 422,
  message: '"name" length must be at least 5 characters long',
};


const errorInsertMessage = { message: errorInsertProduct.message };

module.exports = {
  products,
  productsId,
  returnProductsById,
  errorProductsByid,
  MOCK_ID,
  errorIdMessage,
  returnDeleteProduct,
  errorInsertProduct,
  errorInsertMessage,
};