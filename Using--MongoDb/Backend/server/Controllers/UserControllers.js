// @ts-nocheck
import USERMODEL from "../Models/UserModels";
import { SEND_EMAIL_FOR_FORGOT_PASSWORD } from "../Utils/generateEmail";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

export const Register = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username && !email && !password && !confirmPassword) {
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
  } else {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return res.json({
          error: "Something Wrong, Try Later!",
          error: err,
        });
      } else {
        // console.log(hash);
        const userDetails = new USERMODEL({
          _id: mongoose.Types.ObjectId(),
          username: username,
          email: email,
          password: hash,
        });
        try {
          USERMODEL.findOne({ email: email })
            .exec()
            .then((user) => {
              console.log(user);

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
                      success: "User Registered Successfully",
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

export const Login = (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.json({
      error: "PLease provide all input fields...",
    });
  } else {
    USERMODEL.findOne({ email: email })
      .exec()
      .then((user) => {
        if (!user) {
          return res.json({
            error: "Auth Failed",
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
                "userToPagalhaibhai",
                {
                  expiresIn: "1h",
                }
              );

              return res.status(201).json({
                success: "SuccessFully LOGGED in For 1 HOUR  , congratulations",
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
    USERMODEL.findOne({ email: email })
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
      USERMODEL.findOne({ email: email })
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
    console.log("Error in submitting otp", err.message);
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
          USERMODEL.findOne({ email: email })
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
    console.log("Error in submitting otp", err.message);
    return res.json({ error: `Error in postOTP${err.message}` });
  }
};
//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
