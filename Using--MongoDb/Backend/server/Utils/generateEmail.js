import { createTransport } from "nodemailer";
import dotenv from "dotenv";

// -----------------Secret File -------------|
dotenv.config();

const { MAIL_SENDING_E_MAIL, MAIL_SENDING_MAIL_PASSWORD } = process.env;

const transportOptions = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: MAIL_SENDING_E_MAIL,
    pass: MAIL_SENDING_MAIL_PASSWORD,
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
      from: MAIL_SENDING_E_MAIL,
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

export const SEND_EMAIL_FOR_ADMIN_APPROVAl = (
  email,
  status,
  username,
  secretForApproval
) => {
  // console.log("forgot pass for email sender called");
  let html = null;

  if (status === "success") {
    html = `
    <div style="background: #fab1a0">
      <center>
          <h1>Welcome to EASY__MONEY </h1>

          <img src="cid:unique@kreata.ee" alt="Approvin_you_image" width="600" height="400">

          <h4>Hey ${username} we are Approving you as a admin , keep maintaining loyalty with us And you  will be good to go, </h4>
          <h5> OTP for ${email} is ${secretForApproval} </h5>
          <h6> If This Is Not Done By You , Let US Know </h6>

          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>

    </center> 
    </div>
      `;
  }
  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "Approval as a admin...",
      html,
      attachments: [
        {
          filename: "approvingYou.JPG",
          path: "public/images/approvingYou.jpg",
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

export const SEND_EMAIL_FOR_LOAN_PENDING = (
  email,
  status,
  fullname,
  mobileno
) => {
  // console.log("forgot pass for email sender called");
  let html = null;

  if (status === "success") {
    html = `
    <div style="background: #fab1a0">
      <center>
          <h1>Welcome to EASY__MONEY </h1>

          <img src="cid:unique@kreata.ee" alt="Loan_Pending_Image" width="600" height="400">

          <h4>Hey ${fullname} currently your Application For Loan Issue Has Been submitted , but it is under varification ,  </h4>
          <h4>Shortly You Can Get Call On ${mobileno}, By Our Varification Team And You Will Be Asked Information For Passing The Varification so Keep Track Of That Call.</h4>
         
          

          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>

    </center> 
    </div>
      `;
  }
  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "Loan Application Submission as pending status...",
      html,
      attachments: [
        {
          filename: "loanpending.JPG",
          path: "public/images/loanpending.jpg",
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

export const SEND_EMAIL_FOR_LOAN_APPROVAl = (
  email,
  status,
  username,
  secretForApproval
) => {
  // console.log("forgot pass for email sender called");
  let html = null;

  if (status === "success") {
    html = `
    <div style="background: #fab1a0">
      <center>
          <h1>Welcome to EASY__MONEY </h1>

          <img src="cid:unique@kreata.ee" alt="Approvin_you_image" width="600" height="400">

          <h4>Hey ${username} we are Approving you as a admin , keep maintaining loyalty with us And you  will be good to go, </h4>
          <h5> OTP for ${email} is ${secretForApproval} </h5>
          <h6> If This Is Not Done By You , Let US Know </h6>

          <h1> THANK YOU ONCE AGAIN FOR BEING WITH US </h1>

    </center> 
    </div>
      `;
  }
  try {
    var mailOptions = {
      from: MAIL_SENDING_E_MAIL,
      to: email,
      subject: "Approval as a admin...",
      html,
      attachments: [
        {
          filename: "approvingYou.JPG",
          path: "public/images/approvingYou.jpg",
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
