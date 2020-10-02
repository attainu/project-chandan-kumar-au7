"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])(); // -------------- required Instences -------------------|

var _require = require("../Controllers/AdminControllers"),
    Register = _require.Register,
    Login = _require.Login,
    ApproveAdmin = _require.ApproveAdmin,
    ForgotPassword = _require.ForgotPassword,
    VarifyOTP = _require.VarifyOTP,
    ChangePassword = _require.ChangePassword,
    VarifyAdminSecretToken = _require.VarifyAdminSecretToken; // -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|


router.post("/register", Register);
router.post("/login", Login);
router.post("/assignsecrettoken", ApproveAdmin);
router.post("/varifytoken", VarifyAdminSecretToken);
router.post("/forgotpassword", ForgotPassword);
router.post("/varifyotp", VarifyOTP);
router.post("/changepassword", ChangePassword);
var _default = router;
exports["default"] = _default;