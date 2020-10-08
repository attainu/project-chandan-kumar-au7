"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploads = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _process$env = process.env,
    CLOUD_NAME = _process$env.CLOUD_NAME,
    CLOUDINARY_API_KEY = _process$env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET = _process$env.CLOUDINARY_API_SECRET;

_cloudinary["default"].config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

var uploads = function uploads(file, folder) {
  return new Promise(function (resolve) {
    _cloudinary["default"].uploader.upload(file, function (result) {
      resolve({
        url: result.url,
        id: result.public_id
      });
    }, {
      resources_type: "auto",
      folder: folder
    });
  });
};

exports.uploads = uploads;