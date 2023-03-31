const sql = require('mysql');

// Create connection object
const connection = sql.createConnection({
  host: "cp363-db.cfoq5srjjul5.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "cp363_db",
  database: "herc_rentals",
});

// Connect, error if failed
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

module.exports = connection;