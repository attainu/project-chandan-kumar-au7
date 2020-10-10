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
  const urls = [];

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

    await GETLOANMODEL.findOne({ email: email })
      .exec()
      .then(async (LoanApplier) => {
        // console.log("LoanApplier ", LoanApplier);
        if (LoanApplier) {
          return res.json({
            error: `hey user you are still in loan , pay first to get more loan ... you have [ ${LoanApplier.restloantopay} ] rest to pay`,
          });
        } else {
          // ======= image saving and receiving url ================ //
          const uploader = async (path, fieldname) =>
            await cloudinary.uploads(
              path,
              `${fieldname} Robin_Project--easy-money`
            );
          if (req.method === "POST") {
            // ================{{{{{{{{ Looping through Nested OBJECT }}}}}}}}============= //
            for (const key in files) {
              let value = files[key];
              // console.log("Value ", value[0].path);
              // resObj[key] = value[0].path;
              const resByCloudinary = await uploader(
                value[0].path,
                value[0].fieldname
              );
              urls.push(resByCloudinary);
              fs.unlinkSync(value[0].path);
            }

            // ================{{{{{{{{ End Of Looping through Nested OBJECT }}}}}}}}============= //
          }

          // ==== code for image saving inside mongodb schema ======= //
          urls.map((allImages) => {
            const words = allImages.id.split(" ");
            // console.log(words[0]);
            LoanApplierDetails[words[0]] = allImages.url;
          });
          // ==== End Of code for image saving inside mongodb schema ======= //
          console.log("LoanApplierDetails   ", LoanApplierDetails);

          LoanApplierDetails.save()
            .then((LoanApplierDetails) => {
              SEND_EMAIL_FOR_LOAN_PENDING(email, "success", fullname, mobileno);
              return res.status(201).json({
                success: "Loan Applied Successfully",
                results: LoanApplierDetails,
              });
            })
            .catch((err) => {
              return res.status(500).json({
                error: err.message,
                errormsg:
                  "You cant Apply for now , try again with vaild  and required documents  ",
              });
            });
        }
      });

    // else end
  }
};

export const GetAllLoanApprovedUser = async (req, res) => {
  try {
    const allLoanApprovedUser = await GETLOANMODEL.find({
      approval: "approved",
    });
    if (allLoanApprovedUser.length > 0) {
      return res.status(200).json({ message: allLoanApprovedUser });
    } else {
      return res.json({ error: "No Users Yet ..." });
    }
  } catch (err) {
    // console.log("Error in gettingallLoanApprovedUser", err.message);
    return res.json({
      message: `Error in gettingallLoanApprovedUser ${err.message}`,
    });
  }
};

export const GetAllLoanPendingUser = async (req, res) => {
  try {
    const allLoanPendingUser = await GETLOANMODEL.find({
      approval: "pending",
    });
    if (allLoanPendingUser.length > 0) {
      return res.status(200).json({ message: allLoanPendingUser });
    } else {
      return res.json({ error: "No Users Yet ..." });
    }
  } catch (err) {
    // console.log("Error in gettingallLoanPendingUser", err.message);
    return res.json({
      message: `Error in gettingallLoanPendingUser ${err.message}`,
    });
  }
};

//====================>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<=================\\
