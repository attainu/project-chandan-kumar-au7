import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import logger from "morgan";
const cors = require("cors");

// -----------------Secret File -------------|
dotenv.config();

// ---------------Database Instances Imported--------------------|
require("./Dbconnectors/database");

// ------------------------All Routes Imported Here From All ROUTES Folder--------------------------|

import indexRouter from "./Routes/IndexRoutes";
import usersRouter from "./Routes/UserRoutes";
import adminRouter from "./Routes/AdminRoutes";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

// ------------------------cors error handling.--------------------------|

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// ------------------------Imported Routes In Use--------------------------|

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admins", adminRouter);

// unknown error handling

app.use((req, res, next) => {
  res.json({
    status_code: 404,
    error: `!!!!!  YOU did Something WRONG! Sorry, Try Again  !!!!!`,
  });
});

export default app;
