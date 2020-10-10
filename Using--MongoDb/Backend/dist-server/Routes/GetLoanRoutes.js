"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = require("../Middleware/auth");

var _GetLoanControllers = require("../Controllers/GetLoanControllers");

var _require = require("../Utils/multer"),
    upload = _require.upload;

var router = (0, _express.Router)(); //  ------------ All Routes -------------- |

router.post("/getloan", _auth.middlewarefunc, upload.fields([{
  name: "bankaccountimage"
}, {
  name: "pancardimage"
}, {
  name: "aadharcardimage"
}, {
  name: "usercurrentimage"
}]), _GetLoanControllers.GetLoan);
router.get("/getallloanapproveduser", _auth.middlewarefunc, _GetLoanControllers.GetAllLoanApprovedUser);
router.get("/getallloanpendinguser", _auth.middlewarefunc, _GetLoanControllers.GetAllLoanPendingUser);
var _default = router;
exports["default"] = _default;