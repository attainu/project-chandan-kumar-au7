"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _IndexRoutes = _interopRequireDefault(require("./Routes/IndexRoutes"));

var _UserRoutes = _interopRequireDefault(require("./Routes/UserRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cors = require("cors"); // -----------------Secret File -------------|


_dotenv["default"].config(); // ---------------Database Instances Imported--------------------|


require("./Dbconnectors/database"); // ------------------------All Routes Imported Here From All ROUTES Folder--------------------------|


var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public"))); // ------------------------cors error handling.--------------------------|

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
  next();
}); // ------------------------Imported Routes In Use--------------------------|

app.use("/", _IndexRoutes["default"]);
app.use("/users", _UserRoutes["default"]); // unknown error handling

app.use(function (req, res, next) {
  res.json({
    status_code: 404,
    error: "!!!!!  YOU did Something WRONG! Sorry, Try Again  !!!!!"
  });
});
var _default = app;
exports["default"] = _default;