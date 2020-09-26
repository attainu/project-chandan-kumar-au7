"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePassword = exports.VarifyOTP = exports.ForgotPassword = exports.Login = exports.Register = void 0;

var _UserModels = _interopRequireDefault(require("../Models/UserModels"));

var _generateEmail = require("../Utils/generateEmail");

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
            console.log(user);

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
        return res.json({
          error: "Auth Failed"
        });
      } else {
        _bcrypt["default"].compare(password, user.password, function (err, result) {
          if (err) {
            return res.json({
              error: "Auth Failed"
            });
          } else if (result) {
            var token = _jsonwebtoken["default"].sign({
              username: user.username,
              userid: user._id
            }, "userToPagalhaibhai", {
              expiresIn: "1h"
            });

            return res.status(201).json({
              success: "SuccessFully LOGGED in For 1 HOUR  , congratulations",
              token: token
            });
          } else {
            return res.json({
              error: "Auth Failed"
            });
          }
        });
      }
    })["catch"](function (err) {
      return res.json({
        error: err
      });
    });
  }
};

exports.Login = Login;

var ForgotPassword = function ForgotPassword(req, res) {
  var email = req.body.email;

  if (!email) {
    return res.json({
      error: "PLease provide email from input fields..."
    });
  } else {
    _UserModels["default"].findOne({
      email: email
    }).exec().then(function (user) {
      if (!user) {
        return res.json({
          error: "Either you are not OUR User OR try again with valid email"
        });
      } else {
        //   console.log("else block run");
        var generateOTP = function generateOTP() {
          // console.log("generateOTP func run");
          var digits = "0123456789";
          var OTP = "";

          for (var i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
          }

          return OTP;
        };

        var OTP = generateOTP();
        user.otp = OTP;
        user.save().then(function () {
          var email = user.email,
              username = user.username; //   console.log("email : ", email, "username : ", username);

          (0, _generateEmail.SEND_EMAIL_FOR_FORGOT_PASSWORD)(email, "success", username, OTP);

          var helper = function helper() {
            user.otp = "";
            user.save();
          };

          setTimeout(function () {
            helper();
          }, 180000);
          return res.json({
            success: "check your ".concat(email, " email for OTP, You have 3 min. of time only , so hurry up")
          });
        })["catch"](function (err) {
          return res.json({
            error: "error while saving And" + err.message
          });
        });
      }
    })["catch"](function (err) {
      return res.json({
        error: err.message
      });
    });
  }
};

exports.ForgotPassword = ForgotPassword;

var VarifyOTP = function VarifyOTP(req, res) {
  try {
    var _req$body3 = req.body,
        otp = _req$body3.otp,
        email = _req$body3.email;

    if (!otp || !email) {
      res.json({
        error: "PLease provide all input fields..."
      });
    } else {
      _UserModels["default"].findOne({
        email: email
      }).exec().then(function (user) {
        // console.log(user);
        if (!user) {
          res.status(404).json({
            error: "Auth Failed"
          });
        } else {
          if (user.otp === "") {
            return res.status(400).json({
              error: "OTP has expired"
            });
          }

          if (user.otp === otp) {
            return res.status(200).json({
              success: "OTP Varified"
            });
          } else {
            // console.log(user.otp);
            // console.log(otp);
            return res.status(400).json({
              error: "Invalid OTP, check your email again"
            });
          }
        }
      });
    }
  } catch (err) {
    console.log("Error in submitting otp", err.message);
    return res.status(400).json({
      error: "Error in postOTP".concat(err.message)
    });
  }
};

exports.VarifyOTP = VarifyOTP;

var ChangePassword = function ChangePassword(req, res, next) {
  try {
    var _req$body4 = req.body,
        email = _req$body4.email,
        NewPassword = _req$body4.NewPassword,
        confirmNewPassword = _req$body4.confirmNewPassword;

    if (!NewPassword || !confirmNewPassword || !email) {
      return res.status(400).json({
        error: "Please provide all the required details"
      });
    }

    if (NewPassword !== confirmNewPassword) {
      return res.status(400).json({
        error: "Password Not Matched!"
      });
    } else {
      var hashedPassword;

      _bcrypt["default"].hash(NewPassword, 10, function (err, hash) {
        if (err) {
          return res.json(_defineProperty({
            error: "Something Wrong, Try Later!"
          }, "error", err));
        } else {
          // console.log(hash);
          hashedPassword = hash;

          _UserModels["default"].findOne({
            email: email
          }).exec().then(function (user) {
            // console.log(user);
            user.password = hashedPassword;
            user.save();
            return res.status(200).json({
              success: "Password Changed"
            });
          });
        }
      });
    }
  } catch (err) {
    console.log("Error in submitting otp", err.message);
    return res.status(400).json({
      error: "Error in postOTP".concat(err.message)
    });
  }
}; //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


exports.ChangePassword = ChangePassword;