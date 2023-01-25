const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');
const { products, productsId } = require('../mocks/products.mock');

describe("Teste da camada model", () => {
  afterEach(async () => {
    connection.execute.restore();
  });

  describe("Testando todos os produtos", () => {
    beforeEach(async () => {

      sinon.stub(connection, "execute").resolves([products]);

    });

    it("Testando se pega todos produtos", async () => {

      const response = await productsModel.getAll()

      expect(response).to.deep.equal(products);

    });

    it("Testando se e do tipo array", async () => {
      // dica de teste da mentoria
      const response = await productsModel.getAll();

      expect(response).to.be.a("array");

    });
  });

  describe("Testa se pega os produtos por ID", () => {
    beforeEach(async () => {

      sinon.stub(connection, "execute").resolves([products]);

    });

    const payload = 1;

    it("Testando se pega o produto por ID", async () => {

      const response = await productsModel.getById(payload);

      expect(response).to.deep.equal(productsId);

    });
  });

  it('Testa o insertProduct do product', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 5 }])

    const result = await productsModel.insert({ name: 'Joias do infinito' });

    expect(result).to.be.deep.equal(5);
  });


  it('Testa o deleteProduct do product', async () => {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])

    const result = await productsModel.deleteProd(1)

    expect(result).to.be.deep.equal({ affectedRows: 1 });
  });
});