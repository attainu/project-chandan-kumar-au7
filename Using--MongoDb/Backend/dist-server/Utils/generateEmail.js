"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEND_EMAIL_FOR_LOAN_APPROVAl = exports.SEND_EMAIL_FOR_LOAN_PENDING = exports.SEND_EMAIL_FOR_ADMIN_APPROVAl = exports.SEND_EMAIL_FOR_FORGOT_PASSWORD = void 0;

var _nodemailer = require("nodemailer");

var _dotenv = _interopRequireDefault(require("dotenv"));

// -----------------Secret File -------------|
_dotenv["default"].config();

var _process$env = process.env,
    MAIL_SENDING_E_MAIL = _process$env.MAIL_SENDING_E_MAIL,
    MAIL_SENDING_MAIL_PASSWORD = _process$env.MAIL_SENDING_MAIL_PASSWORD;
var transportOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: MAIL_SENDING_E_MAIL,
    pass: MAIL_SENDING_MAIL_PASSWORD
  }
};
var mailTransport = (0, _nodemailer.createTransport)(transportOptions);

var SEND_EMAIL_FOR_FORGOT_PASSWORD = function SEND_EMAIL_FOR_FORGOT_PASSWORD(email, status, username, otp) {
  // console.log("forgot pass for email sender called");
  var html = null;

  if (status === "success") {
    html = "\n    <div style=\"background: #81ecec\">\n      <center>\n          <h1>Welcome to EASY__MONEY </h1>\n\n          <img src=\"cid:unique@kreata.ee\" alt=\"our_web_image\" width=\"600\" height=\"400\">\n\n          <h4>Hey ".concat(username, " SomeOne Has Requested to Change Your password , If This Is You Enter BELOW OTP so That We Can Do SomeThing For You</h4>\n          <h5> OTP for ").concat(email, " is ").concat(otp, " </h5>\n          <h6> If This Is Not Done By You , Let US Know </h6>\n\n          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>\n\n    </center> \n    </div>\n      ");
  }

  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "FORGOT_PASSWORD request from you...",
      html: html,
      attachments: [{
        filename: "our_web_image.JPG",
        path: "public/images/our_web_image.png",
        cid: "unique@kreata.ee"
      }]
    };
    mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent to : ", info.envelope.to);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.SEND_EMAIL_FOR_FORGOT_PASSWORD = SEND_EMAIL_FOR_FORGOT_PASSWORD;

var SEND_EMAIL_FOR_ADMIN_APPROVAl = function SEND_EMAIL_FOR_ADMIN_APPROVAl(email, status, username, secretForApproval) {
  // console.log("forgot pass for email sender called");
  var html = null;

  if (status === "success") {
    html = "\n    <div style=\"background: #fab1a0\">\n      <center>\n          <h1>Welcome to EASY__MONEY </h1>\n\n          <img src=\"cid:unique@kreata.ee\" alt=\"Approvin_you_image\" width=\"600\" height=\"400\">\n\n          <h4>Hey ".concat(username, " we are Approving you as a admin , keep maintaining loyalty with us And you  will be good to go, </h4>\n          <h5> OTP for ").concat(email, " is ").concat(secretForApproval, " </h5>\n          <h6> If This Is Not Done By You , Let US Know </h6>\n\n          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>\n\n    </center> \n    </div>\n      ");
  }

  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "Approval as a admin...",
      html: html,
      attachments: [{
        filename: "approvingYou.JPG",
        path: "public/images/approvingYou.jpg",
        cid: "unique@kreata.ee"
      }]
    };
    mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent to : ", info.envelope.to);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.SEND_EMAIL_FOR_ADMIN_APPROVAl = SEND_EMAIL_FOR_ADMIN_APPROVAl;

var SEND_EMAIL_FOR_LOAN_PENDING = function SEND_EMAIL_FOR_LOAN_PENDING(email, status, fullname, mobileno) {
  // console.log("forgot pass for email sender called");
  var html = null;

  if (status === "success") {
    html = "\n    <div style=\"background: #fab1a0\">\n      <center>\n          <h1>Welcome to EASY__MONEY </h1>\n\n          <img src=\"cid:unique@kreata.ee\" alt=\"Loan_Pending_Image\" width=\"600\" height=\"400\">\n\n          <h4>Hey ".concat(fullname, " currently your Application For Loan Issue Has Been submitted , but it is under varification ,  </h4>\n          <h4>Shortly You Can Get Call On ").concat(mobileno, ", By Our Varification Team And You Will Be Asked Information For Passing The Varification so Keep Track Of That Call.</h4>\n         \n          \n\n          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>\n\n    </center> \n    </div>\n      ");
  }

  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "Loan Application Submission as pending status...",
      html: html,
      attachments: [{
        filename: "loanpending.JPG",
        path: "public/images/loanpending.jpg",
        cid: "unique@kreata.ee"
      }]
    };
    mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent to : ", info.envelope.to);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.SEND_EMAIL_FOR_LOAN_PENDING = SEND_EMAIL_FOR_LOAN_PENDING;

var SEND_EMAIL_FOR_LOAN_APPROVAl = function SEND_EMAIL_FOR_LOAN_APPROVAl(email, status, username, secretForApproval) {
  // console.log("forgot pass for email sender called");
  var html = null;

  if (status === "success") {
    html = "\n    <div style=\"background: #fab1a0\">\n      <center>\n          <h1>Welcome to EASY__MONEY </h1>\n\n          <img src=\"cid:unique@kreata.ee\" alt=\"Approvin_you_image\" width=\"600\" height=\"400\">\n\n          <h4>Hey ".concat(username, " we are Approving you as a admin , keep maintaining loyalty with us And you  will be good to go, </h4>\n          <h5> OTP for ").concat(email, " is ").concat(secretForApproval, " </h5>\n          <h6> If This Is Not Done By You , Let US Know </h6>\n\n          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>\n\n    </center> \n    </div>\n      ");
  }

  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "Approval as a admin...",
      html: html,
      attachments: [{
        filename: "approvingYou.JPG",
        path: "public/images/approvingYou.jpg",
        cid: "unique@kreata.ee"
      }]
    };
    mailTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent to : ", info.envelope.to);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.SEND_EMAIL_FOR_LOAN_APPROVAl = SEND_EMAIL_FOR_LOAN_APPROVAl;