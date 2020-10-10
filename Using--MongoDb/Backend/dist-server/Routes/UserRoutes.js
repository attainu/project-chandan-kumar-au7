"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../Middleware/auth");

var router = (0, _express["default"])(); // -------------- required Instences -------------------|

var _require = require("../Controllers/UserControllers"),
    Register = _require.Register,
    Login = _require.Login,
    ForgotPassword = _require.ForgotPassword,
    VarifyOTP = _require.VarifyOTP,
    ChangePassword = _require.ChangePassword,
    GetAllUsers = _require.GetAllUsers,
    GetAllInvesters = _require.GetAllInvesters; // -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|


router.post("/register", Register);
router.post("/login", Login);
router.post("/forgotpassword", ForgotPassword);
router.post("/varifyotp", VarifyOTP);
router.post("/changepassword", ChangePassword);
router.get("/getallusers", _auth.AdminAuth, GetAllUsers);
router.get("/getallinvesters", _auth.AdminAuth, GetAllInvesters);
var _default = router;
exports["default"] = _default;