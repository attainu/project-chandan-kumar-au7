"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])(); // -------------- required Instences -------------------|

var _require = require("../Controllers/UserControllers"),
    Register = _require.Register,
    Login = _require.Login; // -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|


router.post("/register", Register);
router.post("/login", Login);
var _default = router;
exports["default"] = _default;