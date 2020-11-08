const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// for data exhcange
// var cors = require('cors')
// app.use(cors())

// parse request 
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//simple rout
app.get("/", (req, res) => {
    res.json({ message: "Welcome! "});
});

require("./routes/user.routes.js")(app);

// set port. listen for requests
app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});