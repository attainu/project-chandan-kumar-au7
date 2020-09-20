"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = void 0;

var Index = function Index(req, res) {
  res.status(200).json({
    messaage: "this is index ",
    route: "/"
  });
};

exports.Index = Index;