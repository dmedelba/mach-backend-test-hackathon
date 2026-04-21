const express = require('express');
const app = express();
const statusRouter = require('./routes/status');

app.use('/api', statusRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});