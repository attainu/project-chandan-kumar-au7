import Router from "express";
const router = Router();

// -------------- required Instences -------------------|
const {
  Register,
  Login,
  ApproveAdmin,
  ForgotPassword,
  VarifyOTP,
  ChangePassword,
  VarifyAdminSecretToken,
} = require("../Controllers/AdminControllers");

// -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|

router.post("/register", Register);

router.post("/login", Login);

router.post("/assignsecrettoken", ApproveAdmin);

router.post("/varifytoken", VarifyAdminSecretToken);

router.post("/forgotpassword", ForgotPassword);

router.post("/varifyotp", VarifyOTP);

router.post("/changepassword", ChangePassword);

export default router;
