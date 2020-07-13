const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : '172.26.49.37',
  user     : 'short_ad',
  password : 'jITz9q4GNAHr1mNy2xNR',
  database : 'short_link'
});

const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users/:id', function (req, res) {
    // Connecting to the database.
    var id = req.params.id;
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users where id = ' + id, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

// Creating a GET route that returns data from the 'users' table.

app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});
// Starting our server.

app.get('/links/:user_id', function (req, res) {
  // Connecting to the database.
  var id = req.params.user_id;
  connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM links WHERE user_id = ' + id, function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
     
      res.setHeader('Access-Control-Allow-Origin', "*");

      res.send(results)
    });
  });
});

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/users so you can see the data.');
 });
 