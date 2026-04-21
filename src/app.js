const express = require('express');
const cors = require('cors');
const healthRouter = require('./routes/health');
const helloRouter = require('./routes/hello');

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/health', healthRouter);
app.use('/api/hello', helloRouter);

module.exports = app;
