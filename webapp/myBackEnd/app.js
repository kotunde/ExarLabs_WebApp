const express = require("express");
 const app = express();
 const port = 5000;

 app.get("/", (req,res) => res.send("This is the root page!"));
 app.get("/spec", (req,res) => res.send("This is a specific page"));

 app.listen(port, () => console.log(`Example app listening on port ${port}!`));