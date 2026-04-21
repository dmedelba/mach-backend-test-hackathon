const express = require('express');
const router = express.Router();

router.get('/api/status', (req, res) => {
  try {
    res.json({ service: 'MACH-API', status: 'online', version: '1.0.0' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;