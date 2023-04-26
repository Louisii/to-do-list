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

app.delete("/api/delete/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const sqlDelete = "DELETE FROM todolist.task WHERE taskId = ?";
  db.query(sqlDelete, taskId, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting task.");
      return;
    }
    res.send("Task deleted successfully.");
  });
});

app.put("/api/update/:taskId", (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const taskDone = req.body.taskDone;

  const sqlUpdate = "UPDATE todolist.task SET taskdone = ? WHERE taskid = ?";
  db.query(sqlUpdate, [taskDone, taskId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating task.");
      return;
    }
    res.send("Task updated successfully.");
  });
});

app.listen(3001, () => {
  console.log("running on port 3001")
})