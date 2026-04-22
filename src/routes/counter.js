// src/routes/counter.js
const express = require('express');
const { getCounter, incrementCounter } = require('../controllers/counterController');

const router = express.Router();

// Ruta para obtener el valor actual del contador
router.get('/', getCounter);

// Ruta para incrementar el contador
router.post('/increment', incrementCounter);

module.exports = router;