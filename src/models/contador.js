const mysql = require('mysql2/promise');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'machbank',
});

async function getContador() {
  const [rows] = await db.execute('SELECT * FROM contador');
  return rows[0];
}

async function incrementContador() {
  await db.execute('UPDATE contador SET valor = valor + 1');
  return await getContador();
}

module.exports = { getContador, incrementContador };