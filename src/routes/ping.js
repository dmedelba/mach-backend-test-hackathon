const express = require('express');
const router = express.Router();

router.get('/api/ping', (req, res) => {
  try {
    res.json({ ping: 'pong' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;