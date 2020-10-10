"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../Middleware/auth");

var router = (0, _express["default"])(); // -------------- required Instences -------------------|

var _require = require("../Controllers/AdminControllers"),
    Register = _require.Register,
    Login = _require.Login,
    ApproveAdmin = _require.ApproveAdmin,
    ForgotPassword = _require.ForgotPassword,
    VarifyOTP = _require.VarifyOTP,
    ChangePassword = _require.ChangePassword,
    VarifyAdminSecretToken = _require.VarifyAdminSecretToken,
    GetAllApprovedAdmin = _require.GetAllApprovedAdmin,
    GetAllPendingAdmin = _require.GetAllPendingAdmin; // -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|


router.post("/register", Register);
router.post("/login", Login);
router.post("/assignsecrettoken", ApproveAdmin);
router.post("/varifytoken", VarifyAdminSecretToken);
router.post("/forgotpassword", ForgotPassword);
router.post("/varifyotp", VarifyOTP);
router.post("/changepassword", ChangePassword);
router.get("/getalladmims", _auth.AdminAuth, GetAllApprovedAdmin);
router.get("/getallpendingadmimn", _auth.AdminAuth, GetAllPendingAdmin);
var _default = router;
exports["default"] = _default;