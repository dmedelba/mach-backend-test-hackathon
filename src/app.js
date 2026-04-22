const express = require('express');
const app = express();
const pingRouter = require('./routes/ping');

app.use('/ping', pingRouter);

module.exports = app;