const express = require("express");
 const app = express();
 const port = 5000;

 app.get("/", (req,res) => res.send("This is the root page!"));
 app.get("/spec", (req,res) => res.send("This is a specific page"));

 app.get("/greeting",(req,res) => res.send("Hello from the backend"));

 var mysql = require('mysql');

 var con = mysql.createConnection({
   host: "localhost",
   user: "tunde",
   password: "incorrect",
   database: "webapp"
 });
 
 con.connect(function(err) {
   if (err) throw err;
   else
   console.log("Connected!");
 });

con.query('SELECT * FROM users', function(err, rows, fields){
    if (err){
        console.log('Query error')
        console.log(err);
    } else {
        console.log('The solution is:',rows)
    }
});


 app.get("/users",(req,res) => res.send("Hello from the backend"));

 app.listen(port, () => console.log(`Example app listening on port ${port}!`));