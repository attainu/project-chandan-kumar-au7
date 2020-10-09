import { Router } from "express";
import { middlewarefunc } from "../Middleware/auth";
import { GetLoan } from "../Controllers/GetLoanControllers";
const { upload } = require("../Utils/multer");

const router = Router();

//  ------------ All Routes -------------- |
router.post(
  "/getloan",
  middlewarefunc,
  upload.fields([
    {
      name: "bankaccountimage",
    },
    {
      name: "pancardimage",
    },
    {
      name: "aadharcardimage",
    },
    {
      name: "usercurrentimage",
    },
  ]),
  GetLoan
);

export default router;
