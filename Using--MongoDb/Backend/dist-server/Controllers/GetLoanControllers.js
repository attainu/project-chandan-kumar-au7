"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllLoanPendingUser = exports.GetAllLoanApprovedUser = exports.GetLoan = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _GetLoanModals = _interopRequireDefault(require("../Models/GetLoanModals"));

var _fs = _interopRequireDefault(require("fs"));

var _generateEmail = require("../Utils/generateEmail");

//File Handler
var cloudinary = require("../Utils/cloudinary"); //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


var GetLoan = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, email, fullname, city, mobileno, pannumber, pincode, address, age, totalloanamount, tenor, interestrate, files, urls, LoanA, Ten, IntRate, intr, EMIamount, restloantopay, LoanApplierDetails;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, fullname = _req$body.fullname, city = _req$body.city, mobileno = _req$body.mobileno, pannumber = _req$body.pannumber, pincode = _req$body.pincode, address = _req$body.address, age = _req$body.age, totalloanamount = _req$body.totalloanamount, tenor = _req$body.tenor, interestrate = _req$body.interestrate;
            files = req.files;
            urls = []; // ========= code for showing user about his REST LOAN AMOUNT TO PAY. ======= //

            LoanA = Number(totalloanamount);
            Ten = Number(tenor);
            IntRate = Number(interestrate);
            intr = IntRate / 1200;
            EMIamount = Math.floor(LoanA * intr / (1 - Math.pow(1 / (1 + intr), Ten)));
            restloantopay = Ten * EMIamount; // ========= END OF code for showing user about his REST LOAN AMOUNT TO PAY. ======= //

            if (!(!email && !fullname && !city && !mobileno && !pannumber && !pincode && !address && !age && !totalloanamount && !tenor && !interestrate)) {
              _context3.next = 13;
              break;
            }

            res.json({
              error: "PLease provide all input fields..."
            });
            _context3.next = 16;
            break;

          case 13:
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

            _context3.next = 16;
            return _GetLoanModals["default"].findOne({
              email: email
            }).exec().then( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(LoanApplier) {
                var uploader, key, value, resByCloudinary;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!LoanApplier) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return", res.json({
                          error: "hey user you are still in loan , pay first to get more loan ... you have [ ".concat(LoanApplier.restloantopay, " ] rest to pay")
                        }));

                      case 4:
                        // ======= image saving and receiving url ================ //
                        uploader = /*#__PURE__*/function () {
                          var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(path, fieldname) {
                            return _regenerator["default"].wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return cloudinary.uploads(path, "".concat(fieldname, " Robin_Project--easy-money"));

                                  case 2:
                                    return _context.abrupt("return", _context.sent);

                                  case 3:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function uploader(_x4, _x5) {
                            return _ref3.apply(this, arguments);
                          };
                        }();

                        if (!(req.method === "POST")) {
                          _context2.next = 17;
                          break;
                        }

                        _context2.t0 = _regenerator["default"].keys(files);

                      case 7:
                        if ((_context2.t1 = _context2.t0()).done) {
                          _context2.next = 17;
                          break;
                        }

                        key = _context2.t1.value;
                        value = files[key]; // console.log("Value ", value[0].path);
                        // resObj[key] = value[0].path;

                        _context2.next = 12;
                        return uploader(value[0].path, value[0].fieldname);

                      case 12:
                        resByCloudinary = _context2.sent;
                        urls.push(resByCloudinary);

                        _fs["default"].unlinkSync(value[0].path);

                        _context2.next = 7;
                        break;

                      case 17:
                        // ==== code for image saving inside mongodb schema ======= //
                        urls.map(function (allImages) {
                          var words = allImages.id.split(" "); // console.log(words[0]);

                          LoanApplierDetails[words[0]] = allImages.url;
                        }); // ==== End Of code for image saving inside mongodb schema ======= //

                        console.log("LoanApplierDetails   ", LoanApplierDetails);
                        LoanApplierDetails.save().then(function (LoanApplierDetails) {
                          (0, _generateEmail.SEND_EMAIL_FOR_LOAN_PENDING)(email, "success", fullname, mobileno);
                          return res.status(201).json({
                            success: "Loan Applied Successfully",
                            results: LoanApplierDetails
                          });
                        })["catch"](function (err) {
                          return res.status(500).json({
                            error: err.message,
                            errormsg: "You cant Apply for now , try again with vaild  and required documents  "
                          });
                        });

                      case 20:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function GetLoan(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetLoan = GetLoan;

var GetAllLoanApprovedUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var allLoanApprovedUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _GetLoanModals["default"].find({
              approval: "approved"
            });

          case 3:
            allLoanApprovedUser = _context4.sent;

            if (!(allLoanApprovedUser.length > 0)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(200).json({
              message: allLoanApprovedUser
            }));

          case 8:
            return _context4.abrupt("return", res.json({
              error: "No Users Yet ..."
            }));

          case 9:
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.json({
              message: "Error in gettingallLoanApprovedUser ".concat(_context4.t0.message)
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function GetAllLoanApprovedUser(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.GetAllLoanApprovedUser = GetAllLoanApprovedUser;

var GetAllLoanPendingUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var allLoanPendingUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _GetLoanModals["default"].find({
              approval: "pending"
            });

          case 3:
            allLoanPendingUser = _context5.sent;

            if (!(allLoanPendingUser.length > 0)) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(200).json({
              message: allLoanPendingUser
            }));

          case 8:
            return _context5.abrupt("return", res.json({
              error: "No Users Yet ..."
            }));

          case 9:
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.json({
              message: "Error in gettingallLoanPendingUser ".concat(_context5.t0.message)
            }));

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function GetAllLoanPendingUser(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}(); //====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\


exports.GetAllLoanPendingUser = GetAllLoanPendingUser;