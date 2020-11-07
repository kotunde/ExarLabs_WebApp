const User = require("../models/user.model.js");

// create and Save a new User
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({
            message: "Empty content!"
        });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    //save user in the db
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Error while creating the User."
                    
            });
        else
            res.send(data);
    });
};

// retrieve all users from the db
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Error while retrieving users."
                    
            });
        else
            res.send(data);
    });
};

// find user with userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            }
        }
        else res.send(data);
    });
};

// update user by the userId in the request
exports.update = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send ({
            message: "Empty content!"
        });
    }

    User.updateById(req.params.userId, new User(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            }
            else {
                res.status(500).send({
                    message: "Error updating User with id" + req.params.userId
                });
            }
        }
        else
            res.send(data);
    });
};

// delete user by userId
exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            }
            else {
                res.status(500).send({
                    message: "Could not delete User with id" + req.params.userId
                });
            }
        }
        else
            res.send({message: `User deleted!`});
    });
};

// delete all users from the db
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Error while removing all users."
            });
        else    
            res.send({ message: `All Users deleted!`});
    });
};