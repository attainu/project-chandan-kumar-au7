import { createTransport } from "nodemailer";
import dotenv from "dotenv";

// -----------------Secret File -------------|
dotenv.config();

const { MAIL_SENDING_E_MAIL, MAIL_SENDING_MAIL_PASSWORD } = process.env;

console.log(MAIL_SENDING_E_MAIL);
console.log(MAIL_SENDING_MAIL_PASSWORD);

console.log(
  "process.env.MAIL_SENDING_E_MAIL ",
  process.env.MAIL_SENDING_E_MAIL
);
console.log(
  "process.env.MAIL_SENDING_MAIL_PASSWORD ",
  process.env.MAIL_SENDING_MAIL_PASSWORD
);

const transportOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.MAIL_SENDING_E_MAIL,
    pass: process.env.MAIL_SENDING_MAIL_PASSWORD,
  },
};

const mailTransport = createTransport(transportOptions);
export const SEND_EMAIL_FOR_FORGOT_PASSWORD = (
  email,
  status,
  username,
  otp
) => {
  // console.log("forgot pass for email sender called");
  let html = null;
  if (status === "success") {
    html = `
    <div style="background: #81ecec">
      <center>
          <h1>Welcome to EASY__MONEY </h1>

          <img src="cid:unique@kreata.ee" alt="our_web_image" width="600" height="400">

          <h4>Hey ${username} SomeOne Has Requested to Change Your password , If This Is You Enter BELOW OTP so That We Can Do SomeThing For You</h4>
          <h5> OTP for ${email} is ${otp} </h5>
          <h6> If This Is Not Done By You , Let US Know </h6>

          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>

    </center> 
    </div>
      `;
  }
  try {
    var mailOptions = {
      from: process.env.MAIL_SENDING_E_MAIL,
      to: email,
      subject: "FORGOT_PASSWORD request from you...",
      html,
      attachments: [
        {
          filename: "our_web_image.JPG",
          path: "public/images/our_web_image.png",
          cid: "unique@kreata.ee",
        },
      ],
    };

    mailTransport.sendMail(mailOptions, (error, info) => {
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
