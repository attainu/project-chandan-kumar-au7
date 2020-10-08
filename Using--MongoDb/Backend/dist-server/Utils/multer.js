"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;

var _multer = _interopRequireWildcard(require("multer"));

//Specify the storage engine
var storage = (0, _multer.diskStorage)({
  destination: function destination(req, file, cb) {
    cb(null, "public/images/uploads");
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
}); // file validation

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
    cb(null, true);
  } else {
    //prevent the upload
    var newError = new Error("File type is incorrect");
    newError.name = "MulterError";
    cb(newError, false);
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
exports.upload = upload;