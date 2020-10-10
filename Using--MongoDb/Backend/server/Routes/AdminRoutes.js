import Router from "express";
import { AdminAuth } from "../Middleware/auth";

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
  GetAllApprovedAdmin,
  GetAllPendingAdmin,
} = require("../Controllers/AdminControllers");

// -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|

router.post("/register", Register);

router.post("/login", Login);

router.post("/assignsecrettoken", ApproveAdmin);

router.post("/varifytoken", VarifyAdminSecretToken);

router.post("/forgotpassword", ForgotPassword);

router.post("/varifyotp", VarifyOTP);

router.post("/changepassword", ChangePassword);

router.get("/getalladmims", AdminAuth, GetAllApprovedAdmin);

router.get("/getallpendingadmimn", AdminAuth, GetAllPendingAdmin);

export default router;
