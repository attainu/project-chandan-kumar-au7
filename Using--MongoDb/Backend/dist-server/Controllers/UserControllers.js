"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllInvesters = exports.GetAllUsers = exports.ChangePassword = exports.VarifyOTP = exports.ForgotPassword = exports.Login = exports.Register = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _UserModels = _interopRequireDefault(require("../Models/UserModels"));

var _InvestModels = _interopRequireDefault(require("../Models/InvestModels"));

var _generateEmail = require("../Utils/generateEmail");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

// @ts-nocheck
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
  } else if (!username.length >= 6) {
    res.json({
      error: "username must have min 6 charactor...!"
    });
  } else if (password !== confirmPassword) {
    res.json({
      error: "Password Not Matched!"
    });
  } else {
    _bcrypt["default"].hash(password, 10, function (err, hash) {
      if (err) {
        return res.json((0, _defineProperty2["default"])({
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
    var _req$body4 = req.body,
        email = _req$body4.email,
        NewPassword = _req$body4.NewPassword,
        confirmNewPassword = _req$body4.confirmNewPassword;

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
    // console.log("Error in submitting otp", err.message);
    return res.json({
      error: "Error in postOTP".concat(err.message)
    });
  }
};

exports.ChangePassword = ChangePassword;

var GetAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var allUsers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _UserModels["default"].find({});

          case 3:
            allUsers = _context.sent;

            if (!(allUsers.length > 0)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              message: allUsers
            }));

          case 8:
            return _context.abrupt("return", res.json({
              error: "No Users Yet ..."
            }));

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log("Error in gettingAllUsers", _context.t0.message);
            return _context.abrupt("return", res.json({
              message: "Error in gettingAllUsers ".concat(_context.t0.message)
            }));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function GetAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetAllUsers = GetAllUsers;

var GetAllInvesters = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var allInvesters;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _InvestModels["default"].find({});

          case 3:
            allInvesters = _context2.sent;

            if (!(allInvesters.length > 0)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              message: allInvesters
            }));

          case 8:
            return _context2.abrupt("return", res.json({
              error: "No Users Yet ..."
            }));

          case 9:
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log("Error in gettingallInvesters", _context2.t0.message);
            return _context2.abrupt("return", res.json({
              message: "Error in gettingallInvesters ".concat(_context2.t0.message)
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function GetAllInvesters(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


exports.GetAllInvesters = GetAllInvesters;