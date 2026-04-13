require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/parts', async (req, res) => {
  const result = await pool.query('SELECT * FROM parts');
  res.json(result.rows);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));