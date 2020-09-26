import Router from "express";
const router = Router();

// -------------- required Instences -------------------|
const {
  Register,
  Login,
  ForgotPassword,
  VarifyOTP,
  ChangePassword,
} = require("../Controllers/UserControllers");

// -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|

router.post("/register", Register);

router.post("/login", Login);

router.post("/forgotpassword", ForgotPassword);

router.post("/varifyotp", VarifyOTP);

router.post("/changepassword", ChangePassword);

export default router;
