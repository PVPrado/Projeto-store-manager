const { expect } = require("chai");
const sinon = require("sinon");
const productsModel = require("../../../src/models/productsModel");
const productServices = require("../../../src/services/productService");
const { products, productsId } = require('../mocks/products.mock');

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
});