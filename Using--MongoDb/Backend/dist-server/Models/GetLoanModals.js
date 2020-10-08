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
  },
  email: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  mobileno: {
    type: Number,
    required: true
  },
  pannumber: {
    type: String,
    required: true,
    match: /[A-Z]{5}[0-9]{4}[A-Z]{1}$/
  },
  pincode: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  approval: {
    type: String,
    "default": "pending"
  },
  limit: {
    type: String,
    "default": "firstlevel"
  },
  age: {
    type: Number,
    required: true
  },
  restloantopay: {
    type: Number,
    "default": ""
  },
  totalloanamount: {
    type: Number,
    required: true,
    "default": ""
  },
  tenor: {
    type: Number,
    required: true,
    "default": ""
  },
  interestrate: {
    type: Number,
    required: true,
    "default": ""
  },
  bankaccountimage: {
    type: String,
    required: true
  },
  pancardimage: {
    type: String,
    required: true
  },
  aadharcardimage: {
    type: String,
    required: true
  },
  usercurrentimage: {
    type: String,
    required: true
  }
});

var _default = (0, _mongoose.model)("getloanmodel", schema); //accessing a model


exports["default"] = _default;