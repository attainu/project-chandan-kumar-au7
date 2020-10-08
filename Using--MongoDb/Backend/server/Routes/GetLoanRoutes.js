import { Router } from "express";
import { middlewarefunc } from "../Middleware/auth";
import { GetLoan } from "../Controllers/GetLoanControllers";
const { upload } = require("../Utils/multer");

const router = Router();

//  ------------ All Routes -------------- |
router.post("/getloan", middlewarefunc, upload.array(["image"]), GetLoan);

export default router;
