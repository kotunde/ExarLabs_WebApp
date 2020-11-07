module.exports = app => {
    const users = require("../controllers/user.controller.js");

    //create user
    app.post("/users", users.create);

    // get all users
    app.get("/users", users.findAll);

    // get user with userId
    app.get("/users/:userId", users.findOne);
    
    // update a user with userId
    app.put("/users/:userId", users.update);

    // delete a user with userId
    app.delete("/users/:userId", users.delete);

    // delete all users
    app.delete("/users", users.deleteAll); 
};