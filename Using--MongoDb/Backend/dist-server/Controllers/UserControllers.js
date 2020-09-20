"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = exports.Register = void 0;

var _UserModels = _interopRequireDefault(require("../Models/UserModels"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
var Register = function Register(req, res, next) {
  var _req$body = req.body,
      username = _req$body.username,
      email = _req$body.email,
      password = _req$body.password,
      confirmPassword = _req$body.confirmPassword;

  if (!username && !email && !password && !confirmPassword) {
    res.json({
      message: "PLease provide all input fields..."
    });
  } else if (password !== confirmPassword) {
    res.json({
      message: "Password Not Matched!"
    });
  } else {
    _bcrypt["default"].hash(password, 10, function (err, hash) {
      if (err) {
        return res.json({
          message: "Something Wrong, Try Later!",
          error: err
        });
      } else {
        // console.log(hash);
        var userDetails = new _UserModels["default"]({
          _id: _mongoose["default"].Types.ObjectId(),
          username: username,
          email: email,
          password: hash
        });

        _UserModels["default"].findOne({
          email: email
        }).then(function (user) {
          // console.log(user);
          if (user) {
            res.json({
              message: "already have a account",
              userid: user._id
            });
          } else {
            userDetails.save().then(function (doc) {
              res.status(201).json({
                message: "User Registered Successfully",
                results: doc
              });
            })["catch"](function (err) {
              res.json(err);
            });
          }
        });
      }
    });
  }
};

exports.Register = Register;

var Login = function Login(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;

  if (!email && !password) {
    res.json({
      message: "PLease provide all input fields..."
    });
  } else {
    _UserModels["default"].findOne({
      email: email
    }).exec().then(function (user) {
      if (!user) {
        res.status(404).json({
          message: "Auth Failed"
        });
      } else {
        _bcrypt["default"].compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              message: "Auth Failed"
            });
          } else if (result) {
            var token = _jsonwebtoken["default"].sign({
              username: user.username,
              userid: user._id
            }, "userToPagalhaibhai", {
              expiresIn: "1h"
            });

            res.status(201).json({
              message: "SuccessFully LOGGED in For 1 HOUR  , congratulations",
              token: token
            });
          } else {
            res.json({
              message: "Auth Failed"
            });
          }
        });
      }
    })["catch"](function (err) {
      res.json({
        error: err
      });
    });
  }
}; //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


exports.Login = Login;