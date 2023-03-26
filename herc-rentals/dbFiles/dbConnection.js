const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "cp363-db.cfoq5srjjul5.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "cp363_db",
  database: "herc_rentals",
  
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Use the connection object to execute queries.
connection.query('SELECT * FROM Employees', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.stack);
    return;
  }
  console.log('Query results:', results);
});

module.exports = connection;
