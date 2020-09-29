"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewarefunc = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = "userToPagalhaibhai";

var middlewarefunc = function middlewarefunc(req, res, next) {
  //Get token from header
  var token = req.header("token"); //check if not token

  if (!token) {
    return res.status(401).json({
      msg: "Hey , No token,authorization denied, sorry but you are now allowed to go further, just pass VAlid credientials"
    });
  } //verify token


  try {
    var decoded = _jsonwebtoken["default"].verify(token, config);

    req.username = decoded.username; //decoded.user because we have set user in payload

    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is not valid"
    });
  }
};

exports.middlewarefunc = middlewarefunc;