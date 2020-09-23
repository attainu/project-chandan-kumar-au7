import USERMODEL from "../Models/UserModels";
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
              // console.log(user);

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
          res.status(404).json({
            error: "Auth Failed",
          });
        } else {
          bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
              res.json({
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

              res.status(201).json({
                success: "SuccessFully LOGGED in For 1 HOUR  , congratulations",
                token: token,
              });
            } else {
              res.json({
                error: "Auth Failed",
              });
            }
          });
        }
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  }
};
//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
