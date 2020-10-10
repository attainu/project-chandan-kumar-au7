"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var Schema = _mongoose.Schema;
var schema = new Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "usermodel"
  }
});

var _default = (0, _mongoose.model)("investmodel", schema); //accessing a model


exports["default"] = _default;