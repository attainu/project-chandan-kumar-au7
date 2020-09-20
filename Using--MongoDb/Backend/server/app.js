import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import logger from "morgan";

// -----------------Secret File -------------|
dotenv.config();

// ---------------Database Instances Imported--------------------|
require("./Dbconnectors/database");

// ------------------------All Routes Imported Here From All ROUTES Folder--------------------------|

import indexRouter from "./Routes/IndexRoutes";
import usersRouter from "./Routes/UserRoutes";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// ------------------------Imported Routes In Use--------------------------|

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
