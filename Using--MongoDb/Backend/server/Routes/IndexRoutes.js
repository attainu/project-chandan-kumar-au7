import { Router } from "express";
import { middlewarefunc } from "../Middleware/auth";
import { Index } from "../Controllers/IndexControllers";

const router = Router();

//  ------------ All Routes -------------- |
router.get("/", middlewarefunc, Index);

export default router;
