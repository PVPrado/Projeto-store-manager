const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const productController = require("../../../src/controllers/productsController");
const productService = require("../../../src/services/productService");
const { expect } = require("chai");
const { products, productsId } = require('../mocks/products.mock');

chai.use(sinonChai);

describe("Teste da camada controller", () => {
  afterEach(async () => {
    sinon.restore();
  });

  // describe("Testando todos os produtos", () => {
  //   beforeEach(() => {

  //     sinon.stub(productService, "getAll").resolves(products);

  //   });
    // TIRAR DUVIDA NA MENTORIA
    it("Testando se pega todos produtos", async () => {
      const req = {};
      const res = {};

      sinon.stub(productService, "getAll").resolves({ type: null, message: products });

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productController.getAll(req, res)

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.be.have.been.calledWith(products)
    })
  });
// });