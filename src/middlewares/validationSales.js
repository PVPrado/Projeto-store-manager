const validationProdId = (req, res, next) => {
  const sales = req.body.map(({ productId }) => {
    if (!productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    return true;
  });

  if (sales.every((e) => e === true)) {
   return next(); 
  }
};

const validationQuat = (req, res, next) => {
  const sales = req.body.map(({ quantity }) => {
    if (+quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }

    if (!quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }

    return true;
  });

  if (sales.every((e) => e === true)) {
   return next(); 
  }
};

module.exports = {
  validationProdId,
  validationQuat,
};