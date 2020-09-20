"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = Login;
exports.SIGNUP = SIGNUP;

var _UserModels = _interopRequireDefault(require("../Models/UserModels"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Login(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  if (!email && !password) {
    res.json({
      message: "PLease provide all input fields..."
    });
  } else {
    _UserModels["default"].find({
      email: email
    }).exec().then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (user.length < 1) {
                  res.status(404).json({
                    message: "Auth Failed"
                  });
                } else {
                  _bcrypt["default"].compare(req.body.password, user[0].password, function (err, result) {
                    if (err) {
                      res.json({
                        message: "Auth Failed"
                      });
                    }

                    if (result) {
                      var token = _jsonwebtoken["default"].sign({
                        username: user[0].username,
                        userid: user[0]._id
                      }, "userToPagalhaibhai", {
                        expiresIn: "2h"
                      });

                      res.status(201).json({
                        message: "SuccessFully LOGGED in For 2 HOUR  , congratulations",
                        token: token
                      });
                    } else {
                      res.json({
                        message: "Auth Failed"
                      });
                    }
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (err) {
      res.json({
        error: err
      });
    });
  }
} //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


function SIGNUP(req, res, next) {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmpassword;
  var profileimage = null;

  if (!username && !email && !password && !confirmPassword) {
    res.json({
      message: "PLease provide all input fields..."
    });
  }

  if (password !== confirmPassword) {
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
          password: hash,
          profileimage: profileimage
        });

        _UserModels["default"].findOne({
          email: email
        }).then(function (user) {
          console.log(user);

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
        }); // const user = JSON.stringify(userFromdatabase);
        // console.log(userFromdatabase);

      }
    });
  }
}