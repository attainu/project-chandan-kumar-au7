"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../Middleware/auth");

var _IndexControllers = require("../Controllers/IndexControllers");

var router = (0, _express.Router)(); //  ------------ All Routes -------------- |

router.get("/", _auth.middlewarefunc, _IndexControllers.Index);
var _default = router;
exports["default"] = _default;