const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const bearerToken = require("express-bearer-token");
const events = require("./events");
const oktaAuth = require("./auth");
require("dotenv").config();

// const connection = mysql.createConnection({
//   port: 3306,
//   host: "d9c88q3e09w6fdb2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "l70m4f3enz7o6mxx",
//   password: "ouc6s5oj0hwlb8eq",
//   database: "n1d3grgaf4qy6cvu",
// });

const connection = mysql.createConnection({
  port: process.env.JAWS_PORT,
  host: process.env.JAWS_HOST,
  user: process.env.JAWS_USER,
  password: process.env.JAWS_PASSWORD,
  database: process.env.JAWS_DATABASE,
});

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
