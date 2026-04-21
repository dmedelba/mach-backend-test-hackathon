const express = require('express');
const app = express();
const pingRouter = require('./routes/ping');

app.use('/api', pingRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});