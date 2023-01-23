const express = require('express');
const productRoute = require('./routers/productsRoute');
const salesRoute = require('./routers/salesRoute');

const app = express();
app.use(express.json());

// nãoa remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRoute);
app.use('/sales', salesRoute);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;