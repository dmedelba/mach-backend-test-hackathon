const express = require('express');
const router = express.Router();
const Contador = require('../models/contador');

router.post('/api/contador', async (req, res) => {
  try {
    const { incremento } = req.body;
    if (!incremento || typeof incremento !== 'number') {
      return res.status(400).json({ error: 'Invalid request' });
    }
    const contador = await Contador.findOneAndUpdate({}, { $inc: { valor: incremento } }, { new: true });
    res.json({ contador: contador.valor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;