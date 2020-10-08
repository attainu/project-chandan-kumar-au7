"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePassword = exports.VarifyOTP = exports.ForgotPassword = exports.Login = exports.VarifyAdminSecretToken = exports.ApproveAdmin = exports.Register = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _AdminModels = _interopRequireDefault(require("../Models/AdminModels"));

var _generateEmail = require("../Utils/generateEmail");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _secureRandomString = _interopRequireDefault(require("secure-random-string"));

// @ts-nocheck
var SecretTokenForRegister = process.env.SECRETTOKENFORREGISTER; //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

var Register = function Register(req, res, next) {
  var _req$body = req.body,
      username = _req$body.username,
      secret = _req$body.secret,
      email = _req$body.email,
      password = _req$body.password,
      confirmPassword = _req$body.confirmPassword;

  if (!username || !email || !password || !confirmPassword || !secret) {
    res.json({
      error: "PLease provide all input fields..."
    });
  } else if (!username.length >= 6) {
    res.json({
      error: "username must have min 6 charactor...!"
    });
  } else if (password !== confirmPassword) {
    res.json({
      error: "Password Not Matched!"
    });
  } else if (secret !== SecretTokenForRegister) {
    res.json({
      error: "Secret Token Is Invalid ! Ask  Admin TO Register"
    });
  } else {
    _bcrypt["default"].hash(password, 10, function (err, hash) {
      if (err) {
        return res.json((0, _defineProperty2["default"])({
          error: "Something Wrong, Try Later!"
        }, "error", err));
      } else {
        // console.log(hash);
        var userDetails = new _AdminModels["default"]({
          _id: _mongoose["default"].Types.ObjectId(),
          username: username,
          secret: SecretTokenForRegister,
          email: email,
          password: hash
        });

        try {
          _AdminModels["default"].findOne({
            email: email
          }).exec().then(function (user) {
            //   console.log(user);
            if (user) {
              res.json({
                error: "already have a account",
                userid: user._id
              });
            } else {
              userDetails.save().then(function (doc) {
                res.status(201).json({
                  success: "Admin Registered Successfully",
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
}; // ============this is also for email sending with secret token ==============//


exports.Register = Register;

var ApproveAdmin = function ApproveAdmin(req, res) {
  var email = req.body.email;

  if (!email) {
    return res.json({
      error: "PLease provide email from input fields..."
    });
  } else {
    _AdminModels["default"].findOne({
      email: email
    }).exec().then(function (user) {
      if (!user) {
        return res.json({
          error: "Either you have not registered Yet or You have put a wrong Email, Try Again By a Valid E-Mail Id"
        });
      } else {
        //   console.log("else block run");
        // // Random string for admin approval
        if (user.status !== "approved") {
          (0, _secureRandomString["default"])({
            length: 50,
            alphanumeric: true
          }, function (err, str) {
            console.log(str);
            user.secret = str;
            user.save().then(function () {
              var email = user.email,
                  username = user.username; //   console.log("email : ", email, "username : ", username);

              (0, _generateEmail.SEND_EMAIL_FOR_ADMIN_APPROVAl)(email, "success", username, str);
              return res.json({
                EMAILSENDsuccess: "check your ".concat(email, " email for SecretToken, and fill the form with that key so that we can approve you")
              });
            });
          });
        } else {
          return res.json({
            success: "Fill Out Your Password For LOG IN"
          });
        }
      }
    });
  }
};

exports.ApproveAdmin = ApproveAdmin;

var VarifyAdminSecretToken = function VarifyAdminSecretToken(req, res) {
  try {
    var _req$body2 = req.body,
        secret = _req$body2.secret,
        email = _req$body2.email;

    if (!secret || !email) {
      res.json({
        error: "PLease provide all input fields..."
      });
    } else {
      _AdminModels["default"].findOne({
        email: email
      }).exec().then(function (user) {
        // console.log(user);
        if (!user) {
          res.json({
            error: "Auth Failed"
          });
        } else {
          if (user.secret === secret) {
            user.status = "approved";
            user.save();
            return res.status(200).json({
              OTPVARIFYsuccess: "secretToken Varified"
            });
          } else {
            // console.log(user.otp);
            // console.log(otp);
            return res.json({
              error: "Invalid OTP, check your email again"
            });
          }
        }
      });
    }
  } catch (err) {
    // console.log("Error in submitting otp", err.message);
    return res.status(400).json({
      error: "Error in postOTP".concat(err.message)
    });
  }
};

exports.VarifyAdminSecretToken = VarifyAdminSecretToken;

var Login = function Login(req, res) {
  var _req$body3 = req.body,
      email = _req$body3.email,
      password = _req$body3.password;

  if (!email && !password) {
    res.json({
      error: "PLease provide all input fields..."
    });
  } else {
    _AdminModels["default"].findOne({
      email: email
    }).exec().then(function (user) {
      if (!user) {
        return res.json({
          error: "Auth Failed"
        });
      } else if (user.status !== "approved") {
        return res.json({
          error: "You are not Being APPROVED Till Now, Make contact with Admin to approve you to avail benefits of being an ADMIN."
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
            }, "adminisking", {
              expiresIn: "1h"
            });

            return res.status(201).json({
              success: "Admin SuccessFully LOGGED in For 1 HOUR  , congratulations",
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
    _AdminModels["default"].findOne({
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
    var _req$body4 = req.body,
        otp = _req$body4.otp,
        email = _req$body4.email;

    if (!otp || !email) {
      res.json({
        error: "PLease provide all input fields..."
      });
    } else {
      _AdminModels["default"].findOne({
        email: email
      }).exec().then(function (user) {
        // console.log(user);
        if (!user) {
          res.json({
            error: "Auth Failed"
          });
        } else {
          if (user.otp === "") {
            return res.json({
              error: "OTP has expired"
            });
          }

          if (user.otp === otp) {
            return res.status(200).json({
              OTPVARIFYsuccess: "OTP Varified"
            });
          } else {
            // console.log(user.otp);
            // console.log(otp);
            return res.json({
              error: "Invalid OTP, check your email again"
            });
          }
        }
      });
    }
  } catch (err) {
    // console.log("Error in submitting otp", err.message);
    return res.status(400).json({
      error: "Error in postOTP".concat(err.message)
    });
  }
};

exports.VarifyOTP = VarifyOTP;

var ChangePassword = function ChangePassword(req, res, next) {
  try {
    var _req$body5 = req.body,
        email = _req$body5.email,
        NewPassword = _req$body5.NewPassword,
        confirmNewPassword = _req$body5.confirmNewPassword;

    if (!NewPassword || !confirmNewPassword || !email) {
      return res.json({
        error: "Please provide all the required details"
      });
    }

    if (NewPassword !== confirmNewPassword) {
      return res.json({
        error: "Password Not Matched!"
      });
    } else {
      var hashedPassword;

      _bcrypt["default"].hash(NewPassword, 10, function (err, hash) {
        if (err) {
          return res.json((0, _defineProperty2["default"])({
            error: "Something Wrong, Try Later!"
          }, "error", err));
        } else {
          // console.log(hash);
          hashedPassword = hash;

          _AdminModels["default"].findOne({
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
    // console.log("Error in submitting otp", err.message);
    return res.json({
      error: "Error in postOTP".concat(err.message)
    });
  }
}; //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


exports.ChangePassword = ChangePassword;