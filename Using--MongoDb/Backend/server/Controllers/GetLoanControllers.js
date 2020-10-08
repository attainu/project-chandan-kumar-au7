import GETLOANMODEL from "../Models/GetLoanModals";
import fs from "fs";
import { SEND_EMAIL_FOR_LOAN_PENDING } from "../Utils/generateEmail";

//File Handler
const cloudinary = require("../Utils/cloudinary");

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\

export const GetLoan = async (req, res) => {
  const {
    email,
    fullname,
    city,
    mobileno,
    pannumber,
    pincode,
    address,
    age,
    totalloanamount,
    tenor,
    interestrate,
  } = req.body;

  const files = req.files;
  console.log("files ====>>>> ", files);
  const urls = [];
  // ======= image saving and receiving url ================ //

  const uploader = async (path) => await cloudinary.uploads(path, "images");
  if (req.method === "POST") {
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);

      urls.push(newPath);
      fs.unlinkSync(path);
    }
    res.status(200).json({
      message: "images uploded successfully",
      data: urls,
    });
  } else {
    res.status(405).json({
      message: "Failed to images uploding",
    });
  }
  // ========= code for showing user about his REST LOAN AMOUNT TO PAY. ======= //

  const LoanA = Number(totalloanamount);
  const Ten = Number(tenor);
  const IntRate = Number(interestrate);
  const intr = IntRate / 1200;

  const EMIamount = Math.floor(
    (LoanA * intr) / (1 - Math.pow(1 / (1 + intr), Ten))
  );

  const restloantopay = Ten * EMIamount;

  // ========= END OF code for showing user about his REST LOAN AMOUNT TO PAY. ======= //

  if (
    !email &&
    !fullname &&
    !city &&
    !mobileno &&
    !pannumber &&
    !pincode &&
    !address &&
    !age &&
    !totalloanamount &&
    !tenor &&
    !interestrate
  ) {
    res.json({
      error: "PLease provide all input fields...",
    });
  } else {
    const LoanApplierDetails = new GETLOANMODEL({
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
      restloantopay: restloantopay,
    });

    // console.log("restloantopay ", restloantopay);
    // console.log("imgResponse  ", imgResponse);
    // console.log("imgUrl  ", imgUrl);
    // console.log("Pan   ", Pan);
    // console.log("file   ", files);
    // console.log("LoanApplierDetails   ", LoanApplierDetails);

    GETLOANMODEL.findOne({ email: email })
      .exec()
      .then((LoanApplier) => {
        // console.log(user);

        // console.log("LoanApplier ", LoanApplier);
        if (LoanApplier) {
          return res.json({
            error: `hey user you are still in loan , pay first to get more loan ... you have [ ${LoanApplier.restloantopay} ] rest to pay`,
          });
        } else {
          // LoanApplierDetails.save()
          //   .then((LoanApplierDetails) => {
          //     SEND_EMAIL_FOR_LOAN_PENDING(email, "success", fullname, mobileno);
          //     return res.status(201).json({
          //       success: "Loan Applied Successfully",
          //       results: LoanApplierDetails,
          //     });
          //   })
          //   .catch((err) => {
          //     return res.status(500).json({
          //       error: err.message,
          //       errormsg:
          //         "You cant Apply for now , try again with vaild  and required documents  ",
          //     });
          //   });
        }
      });

    // else end
  }
};

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
