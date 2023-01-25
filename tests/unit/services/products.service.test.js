const { expect } = require("chai");
const sinon = require("sinon");
const productsModel = require("../../../src/models/productsModel");
const productServices = require("../../../src/services/productService");
const { products, productsId, returnProductsById, errorProductsByid, MOCK_ID, returnDeleteProduct } = require('../mocks/products.mock');

describe("Teste da camada service", () => {
  afterEach(async () => {
    sinon.restore();
  });

  describe("Testando todos os produtos", () => {
    beforeEach(async () => {

      sinon.stub(productsModel, "getAll").resolves(products);

    });

    it("Testando se e do tipo object", async () => {

      const response = await productServices.getAll();

      expect(response).to.be.a("object");

    });
  });
  describe("Testa se pega os produtos por ID", () => {
    beforeEach(async () => {

      sinon.stub(productsModel, "getAll").resolves([products]);

    });
  });

  it('Testa o insertProduct do service', async () => {
    sinon.stub(productsModel, 'insert').resolves(1);
    sinon.stub(productsModel, 'getById').resolves(productsId)

    const result = await productServices.insert({ name: 'Martelo de Thor' });

    expect(result).to.deep.equal(returnProductsById);
  })

  it('Testa getById em caso de erro', async () => {
    sinon.stub(productsModel, 'getById').resolves(undefined);

    const result = await productServices.getById(MOCK_ID);

    expect(result).to.deep.equal(errorProductsByid);
  });

  it('Testa o deleteProduct do product', async () => {
    sinon.stub(productsModel, 'deleteProd').resolves(1)

    const result = await productServices.deleteProd({ id: 1 })

    expect(result).to.deep.equal(returnDeleteProduct)

  })
});