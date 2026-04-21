const express = require('express');
const app = express();
const statusRouter = require('./routes/status');

app.use('/api', statusRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});