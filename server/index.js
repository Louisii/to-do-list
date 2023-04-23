const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'todolist',
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database: ', err);
      return;
    }
    console.log('Connected to database successfully!');
  });


app.get('/', (req, res) => {
    const sqlInsert = "insert into task (taskname, taskdone) values ('buy flowers', 0);"
    db.query(sqlInsert, (err, result) => {
        res.send("hello lou")
    })
    
})

app.listen(3001, () => {
    console.log("running on port 3001")
})