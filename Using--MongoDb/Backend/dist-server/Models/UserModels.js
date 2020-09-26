"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Schema = _mongoose.Schema;
var schema = new Schema({
  // sign in database
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    "default": ""
  }
});

var _default = (0, _mongoose.model)("UserModel", schema); //accessing a model


exports["default"] = _default;