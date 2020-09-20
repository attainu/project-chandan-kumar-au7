import { Router } from "express";
const router = Router();

const { Index } = require("../Controllers/IndexControllers");

//  ------------ All Routes -------------- |
router.get("/", Index);

export default router;
