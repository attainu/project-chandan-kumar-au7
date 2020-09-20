"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process$env = process.env,
    MONGODB_URI = _process$env.MONGODB_URI,
    MONGODB_PASSWORD = _process$env.MONGODB_PASSWORD;

var db = function db() {
  try {
    _mongoose["default"].connect(MONGODB_URI.replace("<password>", MONGODB_PASSWORD), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }, function (err) {
      if (!err) return console.log("MongoDB Connection Succeeded.");
      console.log("Error in DB connection  : ", err.message);
    });
  } catch (error) {
    console.log("Error in DB connnection ");
    console.log(error.message);
  }
};

db();
var _default = _mongoose["default"];
exports["default"] = _default;