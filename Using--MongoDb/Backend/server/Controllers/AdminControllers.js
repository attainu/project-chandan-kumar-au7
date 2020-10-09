// @ts-nocheck
import ADMINMODEL from "../Models/AdminModels";
import {
  SEND_EMAIL_FOR_FORGOT_PASSWORD,
  SEND_EMAIL_FOR_ADMIN_APPROVAl,
} from "../Utils/generateEmail";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import srs from "secure-random-string";

const SecretTokenForRegister = process.env.SECRETTOKENFORREGISTER;

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

export const Register = (req, res, next) => {
  const { username, secret, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword || !secret) {
    res.json({
      error: "PLease provide all input fields...",
    });
  } else if (!username.length >= 6) {
    res.json({
      error: "username must have min 6 charactor...!",
    });
  } else if (password !== confirmPassword) {
    res.json({
      error: "Password Not Matched!",
    });
  } else if (secret !== SecretTokenForRegister) {
    res.json({
      error: "Secret Token Is Invalid ! Ask  Admin TO Register",
    });
  } else {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return res.json({
          error: "Something Wrong, Try Later!",
          error: err,
        });
      } else {
        // console.log(hash);
        const userDetails = new ADMINMODEL({
          _id: mongoose.Types.ObjectId(),
          username: username,
          secret: SecretTokenForRegister,
          email: email,
          password: hash,
        });
        try {
          ADMINMODEL.findOne({ email: email })
            .exec()
            .then((user) => {
              //   console.log(user);

              if (user) {
                res.json({
                  error: "already have a account",
                  userid: user._id,
                });
              } else {
                userDetails
                  .save()
                  .then((doc) => {
                    res.status(201).json({
                      success: "Admin Registered Successfully",
                      results: doc,
                    });
                  })
                  .catch((err) => {
                    res.status(500).json({
                      error: err,
                      errormsg:
                        "cant register right now, please try again later",
                    });
                  });
              }
            })
            .catch((err) => {
              res.status(500).json({
                error: err.message,
                errormsg: "server error,,  please check your connection",
              });
            });
        } catch (error) {
          res.status(500).json({
            error: error.message,
            errormsg: "server error,,  please check your connection",
          });
        }
      }
    });
  }
};

// ============this is also for email sending with secret token ==============//
export const ApproveAdmin = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({
      error: "PLease provide email from input fields...",
    });
  } else {
    ADMINMODEL.findOne({ email: email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.json({
            error:
              "Either you have not registered Yet or You have put a wrong Email, Try Again By a Valid E-Mail Id",
          });
        } else {
          //   console.log("else block run");
          // // Random string for admin approval
          if (user.status !== "approved") {
            srs({ length: 50, alphanumeric: true }, function (err, str) {
              console.log(str);

              user.secret = str;
              user.save().then(() => {
                const { email, username } = user;
                //   console.log("email : ", email, "username : ", username);
                SEND_EMAIL_FOR_ADMIN_APPROVAl(email, "success", username, str);

                return res.json({
                  EMAILSENDsuccess: `check your ${email} email for SecretToken, and fill the form with that key so that we can approve you`,
                });
              });
            });
          } else {
            return res.json({
              success: "Fill Out Your Password For LOG IN",
            });
          }
        }
      });
  }
};

export const VarifyAdminSecretToken = (req, res) => {
  try {
    const { secret, email } = req.body;

    if (!secret || !email) {
      res.json({
        error: "PLease provide all input fields...",
      });
    } else {
      ADMINMODEL.findOne({ email: email })
        .exec()
        .then((user) => {
          // console.log(user);
          if (!user) {
            res.json({
              error: "Auth Failed",
            });
          } else {
            if (user.secret === secret) {
              user.status = "approved";
              user.save();
              return res
                .status(200)
                .json({ OTPVARIFYsuccess: "secretToken Varified" });
            } else {
              // console.log(user.otp);
              // console.log(otp);
              return res.json({
                error: "Invalid OTP, check your email again",
              });
            }
          }
        });
    }
  } catch (err) {
    // console.log("Error in submitting otp", err.message);
    return res.status(400).json({ error: `Error in postOTP${err.message}` });
  }
};

export const Login = (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.json({
      error: "PLease provide all input fields...",
    });
  } else {
    ADMINMODEL.findOne({ email: email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.json({
            error: "Auth Failed",
          });
        } else if (user.status !== "approved") {
          return res.json({
            error:
              "You are not Being APPROVED Till Now, Make contact with Admin to approve you to avail benefits of being an ADMIN.",
          });
        } else {
          bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
              return res.json({
                error: "Auth Failed",
              });
            } else if (result) {
              const token = jwt.sign(
                {
                  username: user.username,
                  userid: user._id,
                },
                "adminisking",
                {
                  expiresIn: "1h",
                }
              );

              return res.status(201).json({
                success:
                  "Admin SuccessFully LOGGED in For 1 HOUR  , congratulations",
                token: token,
              });
            } else {
              return res.json({
                error: "Auth Failed",
              });
            }
          });
        }
      })
      .catch((err) => {
        return res.json({
          error: err,
        });
      });
  }
};

export const ForgotPassword = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({
      error: "PLease provide email from input fields...",
    });
  } else {
    ADMINMODEL.findOne({ email: email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.json({
            error: "Either you are not OUR User OR try again with valid email",
          });
        } else {
          //   console.log("else block run");
          const generateOTP = () => {
            // console.log("generateOTP func run");
            const digits = "0123456789";
            let OTP = "";

            for (let i = 0; i < 6; i++) {
              OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
          };

          const OTP = generateOTP();
          user.otp = OTP;
          user
            .save()
            .then(() => {
              const { email, username } = user;
              //   console.log("email : ", email, "username : ", username);
              SEND_EMAIL_FOR_FORGOT_PASSWORD(email, "success", username, OTP);

              const helper = () => {
                user.otp = "";
                user.save();
              };
              setTimeout(function () {
                helper();
              }, 180000);

              return res.json({
                success: `check your ${email} email for OTP, You have 3 min. of time only , so hurry up`,
              });
            })
            .catch((err) => {
              return res.json({
                error: "error while saving And" + err.message,
              });
            });
        }
      })
      .catch((err) => {
        return res.json({
          error: err.message,
        });
      });
  }
};

export const VarifyOTP = (req, res) => {
  try {
    const { otp, email } = req.body;

    if (!otp || !email) {
      res.json({
        error: "PLease provide all input fields...",
      });
    } else {
      ADMINMODEL.findOne({ email: email })
        .exec()
        .then((user) => {
          // console.log(user);
          if (!user) {
            res.json({
              error: "Auth Failed",
            });
          } else {
            if (user.otp === "") {
              return res.json({
                error: "OTP has expired",
              });
            }
            if (user.otp === otp) {
              return res.status(200).json({ OTPVARIFYsuccess: "OTP Varified" });
            } else {
              // console.log(user.otp);
              // console.log(otp);
              return res.json({
                error: "Invalid OTP, check your email again",
              });
            }
          }
        });
    }
  } catch (err) {
    // console.log("Error in submitting otp", err.message);
    return res.status(400).json({ error: `Error in postOTP${err.message}` });
  }
};

export const ChangePassword = (req, res, next) => {
  try {
    const { email, NewPassword, confirmNewPassword } = req.body;

    if (!NewPassword || !confirmNewPassword || !email) {
      return res.json({
        error: "Please provide all the required details",
      });
    }
    if (NewPassword !== confirmNewPassword) {
      return res.json({
        error: "Password Not Matched!",
      });
    } else {
      let hashedPassword;

      bcrypt.hash(NewPassword, 10, function (err, hash) {
        if (err) {
          return res.json({
            error: "Something Wrong, Try Later!",
            error: err,
          });
        } else {
          // console.log(hash);
          hashedPassword = hash;
          ADMINMODEL.findOne({ email: email })
            .exec()
            .then((user) => {
              // console.log(user);
              user.password = hashedPassword;
              user.save();

              return res.status(200).json({ success: "Password Changed" });
            });
        }
      });
    }
  } catch (err) {
    // console.log("Error in submitting otp", err.message);
    return res.json({ error: `Error in postOTP${err.message}` });
  }
};

export const GetAllAdminPendingRequests = async (req, res) => {
  const alladminwithpendingapproval = await ADMINMODEL.find({});
  console.log(alladminwithpendingapproval);
  res.json({ alladminwithpendingapproval });
};
//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
