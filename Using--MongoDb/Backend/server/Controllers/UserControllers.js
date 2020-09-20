import USERMODEL from "../Models/UserModels";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export function Login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email && !password) {
    res.json({
      message: "PLease provide all input fields...",
    });
  } else {
    USERMODEL.find({ email: email })
      .exec()
      .then(async (user) => {
        if (user.length < 1) {
          res.status(404).json({
            message: "Auth Failed",
          });
        } else {
          bcrypt.compare(req.body.password, user[0].password, function (
            err,
            result
          ) {
            if (err) {
              res.json({
                message: "Auth Failed",
              });
            }
            if (result) {
              const token = jwt.sign(
                {
                  username: user[0].username,
                  userid: user[0]._id,
                },
                "userToPagalhaibhai",
                {
                  expiresIn: "2h",
                }
              );

              res.status(201).json({
                message: "SuccessFully LOGGED in For 2 HOUR  , congratulations",
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
}
//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

export function SIGNUP(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmpassword;
  const profileimage = null;

  if (!username && !email && !password && !confirmPassword) {
    res.json({
      message: "PLease provide all input fields...",
    });
  }

  if (password !== confirmPassword) {
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
          profileimage: profileimage,
        });
        USERMODEL.findOne({ email: email }).then((user) => {
          console.log(user);

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
        // const user = JSON.stringify(userFromdatabase);
        // console.log(userFromdatabase);
      }
    });
  }
}
