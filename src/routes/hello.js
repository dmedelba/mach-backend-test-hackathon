const { Router } = require('express');

const router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Conexión exitosa desde el Backend Test' });
});

module.exports = router;
