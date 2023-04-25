const express = require('express')
const app = express()
const mysql = require('mysql')
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database successfully!');
});


app.get('/', async (req, res) => {});

app.listen(3001, () => {
  console.log("running on port 3001")
})