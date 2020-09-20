import Router from "express";
const router = Router();

// -------------- required Instences -------------------|
const { Register, Login } = require("../Controllers/UserControllers");

// -------------- Used That Instances As VARIOUS REQUESTED ROUTES---------------|

router.post("/register", Register);

router.post("/login", Login);

export default router;
