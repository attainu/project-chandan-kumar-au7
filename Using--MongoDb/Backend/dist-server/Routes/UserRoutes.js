"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var router = (0, _express["default"])(); // -------------- required Instences -------------------|

var _require = require("../Controllers/UserControllers"),
    Register = _require.Register,
    Login = _require.Login,
    ForgotPassword = _require.ForgotPassword,
    VarifyOTP = _require.VarifyOTP,
    ChangePassword = _require.ChangePassword; // -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|


router.post("/register", Register);
router.post("/login", Login);
router.post("/forgotpassword", ForgotPassword);
router.post("/varifyotp", VarifyOTP);
router.post("/changepassword", ChangePassword);
router.get('/:id/delete', function (req, res) {
  UserModel.remove({
    id: req.params.id
  }, function (err) {
    if (err) res.json(err);else res.redirect('/').json("successfuly deleted");
  });
});
var _default = router;
exports["default"] = _default;