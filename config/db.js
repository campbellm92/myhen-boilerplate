require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  })
  .promise();

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    process.exit(1);
  }
  if (connection) connection.release();
  console.log("Connected to the MySQL database");
});

module.exports = pool;
