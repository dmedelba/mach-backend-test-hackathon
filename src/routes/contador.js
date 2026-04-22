const express = require('express');
const router = express.Router();
const contadorModel = require('../models/contador');

router.get('/api/contador', async (req, res) => {
  try {
    const contador = await contadorModel.getContador();
    res.json(contador);
  } catch (err) {
    console.error('Error al obtener contador:', err);
    res.status(500).json({ error: 'Internal error' });
  }
});

router.post('/api/contador', async (req, res) => {
  try {
    const contador = await contadorModel.incrementContador();
    res.json(contador);
  } catch (err) {
    console.error('Error al incrementar contador:', err);
    res.status(500).json({ error: 'Internal error' });
  }
});

module.exports = router;