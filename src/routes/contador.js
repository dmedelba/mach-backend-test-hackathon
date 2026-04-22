const express = require('express');
const router = express.Router();
const Contador = require('../models/contador');

router.get('/api/contador', async (req, res) => {
  try {
    const contador = await Contador.findOne();
    if (!contador) {
      return res.status(404).json({ error: 'Contador no encontrado' });
    }
    res.json({ contador: contador.clics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
});

router.post('/api/contador', async (req, res) => {
  try {
    const contador = await Contador.findOne();
    if (!contador) {
      const newContador = new Contador({ clics: 1 });
      await newContador.save();
      return res.json({ contador: 1 });
    }
    contador.clics += 1;
    await contador.save();
    res.json({ contador: contador.clics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno' });
  }
});

module.exports = router;