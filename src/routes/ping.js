const express = require('express');
const router = express.Router();

router.get('/api/ping', (req, res) => {
  res.json({ ping: 'pong' });
});

module.exports = router;