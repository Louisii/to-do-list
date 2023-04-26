const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
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

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM todolist.task;"
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  })
})

app.post("/api/insert", (req, res) => {

  const taskName = req.body.taskName
  const taskDone = req.body.taskDone

  const sqlInsert = "insert into todolist.task (taskname, taskdone) values (?,?);"
  db.query(sqlInsert, [taskName, taskDone], (err, result) => {
    console.log(err)
  });
})

app.listen(3001, () => {
  console.log("running on port 3001")
})