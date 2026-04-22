const express = require('express');
const router = express.Router();

router.get('/api/ping', (req, res) => {
  try {
    res.status(200).json({ ping: 'pong' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;