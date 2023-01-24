const productsModel = require('../models/productsModel');

const validationProdId = (req, res, next) => {
  const { body } = req;
  const validation = body.some((i) => !i.productId);
  
  if (validation) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

const validationQuat = (req, res, next) => {
  const { body } = req;
  const validation = body.some((i) => !i.quant);

  if (validation) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

const validationQuatNumber = (req, res, next) => {
  const { body } = req;
  const validation = body.some((i) => i.quant <= 0);

  if (validation) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validationOneQuat = async (req, res, next) => {
  const result = await productsModel.getById(req.body);

  if (req.body.length !== result.length) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validationProdId,
  validationQuat,
  validationQuatNumber,
  validationOneQuat,
};