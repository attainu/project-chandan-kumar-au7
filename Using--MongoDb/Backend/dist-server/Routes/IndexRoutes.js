"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();

var _require = require("../Controllers/IndexControllers"),
    Index = _require.Index; //  ------------ All Routes -------------- |


router.get("/", Index);
var _default = router;
exports["default"] = _default;