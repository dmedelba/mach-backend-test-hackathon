const express = require('express');
const cors = require('cors');
const healthRouter = require('./routes/health');
const helloRouter = require('./routes/hello');
const counterRouter = require('./routes/counter'); // NUEVO: Importar la ruta del contador

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', healthRouter);
app.use('/api/hello', helloRouter);
app.use('/api/counter', counterRouter); // NUEVO: Usar la ruta del contador

module.exports = app;