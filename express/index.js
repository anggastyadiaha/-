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

app.get('/wallet/:id', async (req, res, id) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    
    const query = 'SELECT * FROM wallet WHERE id= {id}';

    
  try {
    const result = await pool.query(query, [offset, limit]);

    // Menghitung total entri tanpa paginasi
    const totalQuery = 'SELECT COUNT(*) FROM wallet';
    const totalResult = await pool.query(totalQuery);
    const totalEntries = parseInt(totalResult.rows[0].count, 10);

    const totalPages = Math.ceil(totalEntries / limit);

    res.json({
      data: result.rows,
      pagination: {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalEntries,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

});

