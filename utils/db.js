import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PM",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error");
  } else {
    console.log("Connected Succesfully");
  }
});

export default con;
