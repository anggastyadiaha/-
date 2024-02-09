const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Konfigurasi koneksi ke database PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bsi-app',
  password: 'anggastya01',
  port: 5432,
});

app.use(bodyParser.json());

// Fungsi Read (SELECT)
app.get('/wallet/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM wallet WHERE id = $1';
  
  try {
    const result = await pool.query(query, [id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Fungsi Read Transactions (SELECT)
app.get('/transaction/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM transaction WHERE wallet_id = $1';
  
  try {
    const result = await pool.query(query, [id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Fungsi Patch (Partial Update)
app.patch('/wallet/:id', async (req, res) => {
  const Id = req.params.id;
  const balance = req.body.balance;
  const updateFields = req.body;

  if (Object.keys(updateFields).length === 0) {
    return res.status(400).send('Bad Request: No fields to update');
  }
  const query = 'UPDATE wallet SET balance = balance + $1 WHERE id=$2 RETURNING *';
  const values = [balance, Id];

  try {
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Fungsi Create (INSERT)
app.post('/wallet/:id', async (req, res) => {
  const Id = req.params.id;
  // const amount = req.body.amount;
  const query = 'INSERT into transaction (wallet_id, name, description, amount, type) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
  const {name = "Top-Up", description = "Top-Up Saldo", amount, type = "IN"} = req.body
  const values = [Id, name, description, amount, type];

  try {
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});