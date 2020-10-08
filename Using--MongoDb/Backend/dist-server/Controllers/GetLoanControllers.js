"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetLoan = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _GetLoanModals = _interopRequireDefault(require("../Models/GetLoanModals"));

var _fs = _interopRequireDefault(require("fs"));

var _generateEmail = require("../Utils/generateEmail");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//File Handler
var cloudinary = require("../Utils/cloudinary"); //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


var GetLoan = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, email, fullname, city, mobileno, pannumber, pincode, address, age, totalloanamount, tenor, interestrate, files, urls, uploader, _iterator, _step, file, path, newPath, LoanA, Ten, IntRate, intr, EMIamount, restloantopay, LoanApplierDetails;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, fullname = _req$body.fullname, city = _req$body.city, mobileno = _req$body.mobileno, pannumber = _req$body.pannumber, pincode = _req$body.pincode, address = _req$body.address, age = _req$body.age, totalloanamount = _req$body.totalloanamount, tenor = _req$body.tenor, interestrate = _req$body.interestrate;
            files = req.files;
            console.log("files ====>>>> ", files);
            urls = []; // ======= image saving and receiving url ================ //

            uploader = /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return cloudinary.uploads(path, "images");

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function uploader(_x3) {
                return _ref2.apply(this, arguments);
              };
            }();

            if (!(req.method === "POST")) {
              _context2.next = 30;
              break;
            }

            _iterator = _createForOfIteratorHelper(files);
            _context2.prev = 7;

            _iterator.s();

          case 9:
            if ((_step = _iterator.n()).done) {
              _context2.next = 19;
              break;
            }

            file = _step.value;
            path = file.path;
            _context2.next = 14;
            return uploader(path);

          case 14:
            newPath = _context2.sent;
            urls.push(newPath);

            _fs["default"].unlinkSync(path);

          case 17:
            _context2.next = 9;
            break;

          case 19:
            _context2.next = 24;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](7);

            _iterator.e(_context2.t0);

          case 24:
            _context2.prev = 24;

            _iterator.f();

            return _context2.finish(24);

          case 27:
            res.status(200).json({
              message: "images uploded successfully",
              data: urls
            });
            _context2.next = 31;
            break;

          case 30:
            res.status(405).json({
              message: "Failed to images uploding"
            });

          case 31:
            // ========= code for showing user about his REST LOAN AMOUNT TO PAY. ======= //
            LoanA = Number(totalloanamount);
            Ten = Number(tenor);
            IntRate = Number(interestrate);
            intr = IntRate / 1200;
            EMIamount = Math.floor(LoanA * intr / (1 - Math.pow(1 / (1 + intr), Ten)));
            restloantopay = Ten * EMIamount; // ========= END OF code for showing user about his REST LOAN AMOUNT TO PAY. ======= //

            if (!email && !fullname && !city && !mobileno && !pannumber && !pincode && !address && !age && !totalloanamount && !tenor && !interestrate) {
              res.json({
                error: "PLease provide all input fields..."
              });
            } else {
              LoanApplierDetails = new _GetLoanModals["default"]({
                email: email,
                fullname: fullname,
                city: city,
                mobileno: mobileno,
                pannumber: pannumber,
                pincode: pincode,
                address: address,
                age: age,
                totalloanamount: totalloanamount,
                tenor: tenor,
                interestrate: interestrate,
                restloantopay: restloantopay
              }); // console.log("restloantopay ", restloantopay);
              // console.log("imgResponse  ", imgResponse);
              // console.log("imgUrl  ", imgUrl);
              // console.log("Pan   ", Pan);
              // console.log("file   ", files);
              // console.log("LoanApplierDetails   ", LoanApplierDetails);

              _GetLoanModals["default"].findOne({
                email: email
              }).exec().then(function (LoanApplier) {
                // console.log(user);
                // console.log("LoanApplier ", LoanApplier);
                if (LoanApplier) {
                  return res.json({
                    error: "hey user you are still in loan , pay first to get more loan ... you have [ ".concat(LoanApplier.restloantopay, " ] rest to pay")
                  });
                } else {// LoanApplierDetails.save()
                  //   .then((LoanApplierDetails) => {
                  //     SEND_EMAIL_FOR_LOAN_PENDING(email, "success", fullname, mobileno);
                  //     return res.status(201).json({
                  //       success: "Loan Applied Successfully",
                  //       results: LoanApplierDetails,
                  //     });
                  //   })
                  //   .catch((err) => {
                  //     return res.status(500).json({
                  //       error: err.message,
                  //       errormsg:
                  //         "You cant Apply for now , try again with vaild  and required documents  ",
                  //     });
                  //   });
                }
              }); // else end

            }

          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 21, 24, 27]]);
  }));

  return function GetLoan(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


exports.GetLoan = GetLoan;