const express = require('express');
const router = express.Router();

router.get('/api/status', (req, res) => {
  res.json({ "service": "MACH-API", "status": "online", "version": "1.0.0" });
});

module.exports = router;