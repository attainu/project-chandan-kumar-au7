"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEND_EMAIL_FOR_FORGOT_PASSWORD = void 0;

var _nodemailer = require("nodemailer");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// -----------------Secret File -------------|
_dotenv["default"].config(); // const { MAIL_SENDING_E_MAIL, MAIL_SENDING_MAIL_PASSOWRD } = process.env;


var transportOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: process.env.NODE_ENV === "develop",
  auth: {
    user: process.env.MAIL_SENDING_E_MAIL,
    pass: process.env.MAIL_SENDING_MAIL_PASSOWRD
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
      from: process.env.MAIL_SENDING_E_MAIL,
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
      }

      console.log("Message sent: %s", info);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.SEND_EMAIL_FOR_FORGOT_PASSWORD = SEND_EMAIL_FOR_FORGOT_PASSWORD;