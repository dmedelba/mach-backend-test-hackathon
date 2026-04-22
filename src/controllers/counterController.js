// src/controllers/counterController.js

let currentCount = 0; // ADR-001: Contador en memoria, se reinicia con cada inicio del servidor.

/**
 * Obtiene el valor actual del contador.
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {object} - Objeto de respuesta JSON con el valor del contador.
 */
const getCounter = (req, res) => {
  try {
    // No hay lógica compleja, solo devolver el valor actual.
    return res.status(200).json({ count: currentCount });
  } catch (error) {
    // En un caso tan simple, un error aquí sería muy inusual (ej. problema de memoria),
    // pero se incluye el manejo de errores para cumplir con la regla de "manejo de errores en cada función".
    console.error('Error getting counter:', error);
    return res.status(500).json({ error: 'Internal Server Error', code: 'SERVER_ERROR' });
  }
};

/**
 * Incrementa el contador en 1.
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {object} - Objeto de respuesta JSON con el nuevo valor del contador.
 */
const incrementCounter = (req, res) => {
  try {
    currentCount += 1; // Incrementa el contador en 1.
    return res.status(200).json({ newCount: currentCount });
  } catch (error) {
    // Similar a getCounter, un error aquí es poco probable pero se maneja.
    console.error('Error incrementing counter:', error);
    return res.status(500).json({ error: 'Internal Server Error', code: 'SERVER_ERROR' });
  }
};

module.exports = {
  getCounter,
  incrementCounter,
};