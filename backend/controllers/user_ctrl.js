const { data } = require("autoprefixer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

// sign up
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      position: req.body.position,
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "User added successfully!",
        });
      })
      .catch((error) => {
        console.log(error.stack);
        res.status(500).json({
          error: error.message || error,
        });
      });
  });
};

// login
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: "Incorrect password!",
            });
          }
          const token = jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });
          res.status(200).json({
            userId: user.id,
            token: token,
          });
        })
        .catch((error) => {
          console.log(error.stack);
          res.status(500).json({
            error: error.message || error,
          });
        });
    })
    .catch((error) => {
      console.log(error.stack);
      res.status(500).json({
        error: error.message || error,
      });
    });
};

// delete user
exports.deleteUser = (req, res, next) => {
  User.findOne({ id: req.params.id }).then((user) => {
    User.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.status(200).json({
          message: "Deleted user!",
        });
      })
      .catch((error) => {
        console.log(error.stack);
        res.status(400).json({
          error: error.message || error,
        });
      });
  });
};

// find one user
exports.findOne = (req, res, next) => {
  User.findOne({ id: req.params.id })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error.stack);
      res.status(404).json({
        error: error.message || error,
      });
    });
};

// find all users
exports.findAll = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log(error.stack);
      res.status(400).json({
        error: error.message || error,
      });
    });
};
