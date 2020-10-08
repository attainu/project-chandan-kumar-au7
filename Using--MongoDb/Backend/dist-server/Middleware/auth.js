"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminAuth = exports.middlewarefunc = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var configForUser = "userToPagalhaibhai";
var configForAdmin = "adminisking";

var middlewarefunc = function middlewarefunc(req, res, next) {
  //Get token from header
  var token = req.header("token"); //check if not token

  if (!token) {
    return res.json({
      msg: "Hey , No token,authorization denied, sorry but you are now allowed to go further, just pass VAlid credientials"
    });
  } //verify token


  try {
    var decoded = _jsonwebtoken["default"].verify(token, configForUser);

    req.username = decoded.username; //decoded.user because we have set user in payload

    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid"
    });
  }
};

exports.middlewarefunc = middlewarefunc;

var AdminAuth = function AdminAuth(req, res, next) {
  //Get token from header
  var token = req.header("token"); //check if not token

  if (!token) {
    return res.json({
      msg: "Hey , No token, means authorization denied, sorry but you are now allowed to go further, just pass VAlid credientials"
    });
  } //verify token


  try {
    var decoded = _jsonwebtoken["default"].verify(token, configForAdmin);

    req.username = decoded.username; //decoded.user because we have set user in payload

    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid"
    });
  }
};

exports.AdminAuth = AdminAuth;