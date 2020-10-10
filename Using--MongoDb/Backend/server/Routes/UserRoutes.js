import Router from "express";
import { AdminAuth } from "../Middleware/auth";

const router = Router();

// -------------- required Instences -------------------|
const {
  Register,
  Login,
  ForgotPassword,
  VarifyOTP,
  ChangePassword,
  GetAllUsers,
  GetAllInvesters,
} = require("../Controllers/UserControllers");

// -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|

router.post("/register", Register);

router.post("/login", Login);

router.post("/forgotpassword", ForgotPassword);

router.post("/varifyotp", VarifyOTP);

router.post("/changepassword", ChangePassword);

router.get("/getallusers", AdminAuth, GetAllUsers);

router.get("/getallinvesters", AdminAuth, GetAllInvesters);

export default router;
