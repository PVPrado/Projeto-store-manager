const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const productController = require("../../../src/controllers/productsController");
const productService = require("../../../src/services/productService");
const { expect } = require("chai");
const { products, MOCK_ID, errorProductsByid, errorIdMessage, errorInsertProduct, errorInsertMessage } = require('../mocks/products.mock');

chai.use(sinonChai);

describe("Teste da camada controller", () => {
  afterEach(async () => {
    sinon.restore();
  });
  // tirei pq ta dando erro e Deus e maravilhoso
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
  
  it('Testa getById em caso de erro', async () => {
    const req = { params: { id: MOCK_ID } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getById').resolves(errorProductsByid);

    await productController.getById(req, res);

    expect(res.status).calledWith(404);
    expect(res.json).calledWith(errorIdMessage);
  });

  it('Testa o insert em caso de erro', async () => {
    const req = { body: { name: 'joia' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'insert').resolves(errorInsertProduct);

    await productController.insert(req, res);

    expect(res.status).calledWith(404);
    expect(res.json).calledWith(errorInsertMessage);
  });
  });
// });