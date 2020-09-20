import USERMODEL from "../Models/UserModels";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

export const Register = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username && !email && !password && !confirmPassword) {
    res.json({
      message: "PLease provide all input fields...",
    });
  } else if (password !== confirmPassword) {
    res.json({
      message: "Password Not Matched!",
    });
  } else {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) {
        return res.json({
          message: "Something Wrong, Try Later!",
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
        USERMODEL.findOne({ email: email }).then((user) => {
          // console.log(user);

          if (user) {
            res.json({
              message: "already have a account",
              userid: user._id,
            });
          } else {
            userDetails
              .save()
              .then((doc) => {
                res.status(201).json({
                  message: "User Registered Successfully",
                  results: doc,
                });
              })
              .catch((err) => {
                res.json(err);
              });
          }
        });
      }
    });
  }
};

export const Login = (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.json({
      message: "PLease provide all input fields...",
    });
  } else {
    USERMODEL.findOne({ email: email })
      .exec()
      .then((user) => {
        if (!user) {
          res.status(404).json({
            message: "Auth Failed",
          });
        } else {
          bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
              res.json({
                message: "Auth Failed",
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
                message: "SuccessFully LOGGED in For 1 HOUR  , congratulations",
                token: token,
              });
            } else {
              res.json({
                message: "Auth Failed",
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
