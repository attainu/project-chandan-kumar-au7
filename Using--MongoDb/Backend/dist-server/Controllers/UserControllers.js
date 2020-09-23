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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
var Register = function Register(req, res, next) {
  var _req$body = req.body,
      username = _req$body.username,
      email = _req$body.email,
      password = _req$body.password,
      confirmPassword = _req$body.confirmPassword;

  if (!username && !email && !password && !confirmPassword) {
    res.json({
      error: "PLease provide all input fields..."
    });
  } else if (password !== confirmPassword) {
    res.json({
      error: "Password Not Matched!"
    });
  } else {
    _bcrypt["default"].hash(password, 10, function (err, hash) {
      if (err) {
        return res.json(_defineProperty({
          error: "Something Wrong, Try Later!"
        }, "error", err));
      } else {
        // console.log(hash);
        var userDetails = new _UserModels["default"]({
          _id: _mongoose["default"].Types.ObjectId(),
          username: username,
          email: email,
          password: hash
        });

        try {
          _UserModels["default"].findOne({
            email: email
          }).exec().then(function (user) {
            // console.log(user);
            if (user) {
              res.json({
                error: "already have a account",
                userid: user._id
              });
            } else {
              userDetails.save().then(function (doc) {
                res.status(201).json({
                  success: "User Registered Successfully",
                  results: doc
                });
              })["catch"](function (err) {
                res.status(500).json({
                  error: err,
                  errormsg: "cant register right now, please try again later"
                });
              });
            }
          })["catch"](function (err) {
            res.status(500).json({
              error: err.message,
              errormsg: "server error,,  please check your connection"
            });
          });
        } catch (error) {
          res.status(500).json({
            error: error.message,
            errormsg: "server error,,  please check your connection"
          });
        }
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
      error: "PLease provide all input fields..."
    });
  } else {
    _UserModels["default"].findOne({
      email: email
    }).exec().then(function (user) {
      if (!user) {
        res.status(404).json({
          error: "Auth Failed"
        });
      } else {
        _bcrypt["default"].compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: "Auth Failed"
            });
          } else if (result) {
            var token = _jsonwebtoken["default"].sign({
              username: user.username,
              userid: user._id
            }, "userToPagalhaibhai", {
              expiresIn: "1h"
            });

            res.status(201).json({
              success: "SuccessFully LOGGED in For 1 HOUR  , congratulations",
              token: token
            });
          } else {
            res.json({
              error: "Auth Failed"
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