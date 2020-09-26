import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userForgotpassFuncFromUserAction } from "../redux/actions/userAction";
import { userForgotPassErrorAction } from "../redux/actions/errorAction";
import { userForgotPassAction } from "../redux/actions/userAction";

function Forgot() {
  const dispatch = useDispatch();
  const SuccessOfforgotPasswordDataFromStore = useSelector(
    (store) => store.userDataFromStore
  );
  const ErrorOfforgotPasswordDataFromStore = useSelector(
    (store) => store.errorDatafromStore
  );

  // ================== Maintaining state from here ================================//

  const [isSentEmail, setisSentEmail] = useState(false);
  const [isVarifiedOTP, setisVarifiedOTP] = useState(false);

  const [email, setemail] = useState("");
  const [OtpSend, setOtpSend] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  var [EmError, setEmError] = useState("");
  var [OtpSendError, setOtpSendError] = useState("");
  var [PassError, setPassError] = useState("");
  var [ConPassError, setConPassError] = useState("");

  // ================== Maintaining state end =========================================//

  //=================== EmailSendSubmitHandler for just one field =====================//

  const EmailSendSubmitHandler = (e) => {
    e.preventDefault();
    if (email) {
      // console.log(
      //   "forgotPasswordDataFromStore ",
      //   SuccessOfforgotPasswordDataFromStore
      // );
      if (
        Object.keys(SuccessOfforgotPasswordDataFromStore.user).length !== 0 ||
        Object.keys(ErrorOfforgotPasswordDataFromStore.passwordChangingErrors)
          .length !== 0
      ) {
        dispatch(userForgotPassAction({}));
        dispatch(userForgotPassErrorAction({}));
      }
      dispatch(userForgotpassFuncFromUserAction({ email }));
      if (SuccessOfforgotPasswordDataFromStore.user.success) {
        console.log(
          "FORGOT.JSX forgotPasswordDataFromStore ",
          SuccessOfforgotPasswordDataFromStore
        );
        console.log("EmailSendSubmitHandler invoked");
        console.log("email : ", email);
        setTimeout(() => {
          setisSentEmail(true);
        }, 5000);
      }
    } else {
      setEmError("* This Field Is Reqired");
    }
  };

  //=================== EmailSendSubmitHandler for just one field END =====================//

  //=================== OtpVarifySubmitHandler with just two field =====================//

  const OtpVarifySubmitHandler = (e) => {
    e.preventDefault();
    setisVarifiedOTP(true);

    console.log("OtpVarifySubmitHandler invoked");
    console.log("OtpSend : ", OtpSend);
  };

  //=================== OtpVarifySubmitHandler with just two field END =====================//

  //=================== ForgotFormSubmitHandler with all field =====================//

  const ForgotFormSubmitHandler = (e) => {
    e.preventDefault();

    console.log("ForgotFormSubmitHandler invoked");
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("confirmPassword : ", confirmPassword);
  };

  //=================== ForgotFormSubmitHandler with all field END =====================//

  return (
    <div className='hold-transition login-page'>
      <div className='register-box'>
        <div className='register-logo'>
          <b>RE</b> Pass
        </div>

        <div className='card'>
          <div className='card-body register-card-body'>
            <p className='login-box-msg'>*NOTE : All filds are mandatory</p>

            <form onSubmit={ForgotFormSubmitHandler}>
              {/* ============== Start Email Div =========== */}

              <div className='input-group mb-3'>
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                    setEmError("");
                  }}
                  type='email'
                  className='form-control'
                  placeholder='Email'
                />
                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <button
                      onClick={EmailSendSubmitHandler}
                      className='fas fa-envelope btn btn-block btn-outline-success btn-sm'
                      type='submit'></button>
                  </div>
                </div>
              </div>
              <h6 style={{ color: "red", textAlign: "left" }}>{EmError}</h6>

              {/* ================== End Email Div ================ */}

              {/* ============== Start OTP Div =========== */}

              {isSentEmail === true ? (
                <>
                  {/* =============== Second Condition ========= */}

                  {isVarifiedOTP === false ? (
                    <>
                      <div className='input-group mb-3'>
                        <input
                          onChange={(e) => {
                            setOtpSend(e.target.value);
                            setOtpSendError("");
                          }}
                          type='test'
                          className='form-control'
                          placeholder='Otp'
                        />
                        <div className='input-group-append'>
                          <div className='input-group-text'>
                            <button
                              onClick={OtpVarifySubmitHandler}
                              className='fas fa-mars-double fa-sm btn btn-block btn-outline-success btn-sm'
                              type='submit'></button>
                          </div>
                        </div>
                      </div>

                      <h6 style={{ color: "red", textAlign: "left" }}>
                        {OtpSendError}
                      </h6>
                    </>
                  ) : (
                    <>
                      {/* ================== End OTP Div ================ */}

                      {/* =========== Start Password Div =========== */}

                      <div className='input-group mb-3'>
                        <input
                          onChange={(e) => {
                            setpassword(e.target.value);
                            setPassError("");
                          }}
                          type='password'
                          className='form-control'
                          placeholder='Password'
                        />
                        <div className='input-group-append'>
                          <div className='input-group-text'>
                            <span className='fas fa-lock'></span>
                          </div>
                        </div>
                      </div>
                      <h6 style={{ color: "red", textAlign: "left" }}>
                        {PassError}
                      </h6>

                      {/* ================== End Password Div ================ */}

                      {/* ======== Start COnfirm - Password Div ======== */}

                      <div className='input-group mb-3'>
                        <input
                          onChange={(e) => {
                            setconfirmPassword(e.target.value);
                            setConPassError("");
                          }}
                          type='password'
                          className='form-control'
                          placeholder='Retype password'
                        />
                        <div className='input-group-append'>
                          <div className='input-group-text'>
                            <span className='fas fa-lock'></span>
                          </div>
                        </div>
                      </div>
                      <h6 style={{ color: "red", textAlign: "left" }}>
                        {ConPassError}
                      </h6>

                      {/* ============== End COnfirm - Password Div ============ */}

                      {/* ======== Start Submit -button Div ======== */}

                      <div className='row'>
                        <div className='col-sm-8 mx-auto'>
                          <button
                            type='submit'
                            className='btn btn-block btn-outline-warning'>
                            FORGOT_PASS
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* ============== End Submit -button Div ============ */}
                </>
              ) : (
                <></>
              )}
            </form>

            {Object.keys(
              ErrorOfforgotPasswordDataFromStore.passwordChangingErrors
            ).length === 0 ? (
              <></>
            ) : (
              <h6 style={{ color: "red" }}>
                {JSON.stringify(
                  ErrorOfforgotPasswordDataFromStore.passwordChangingErrors
                    .error
                )}
              </h6>
            )}
            {Object.keys(SuccessOfforgotPasswordDataFromStore.user).length ===
            0 ? (
              <></>
            ) : (
              <h6 style={{ color: "red" }}>
                {JSON.stringify(
                  SuccessOfforgotPasswordDataFromStore.user.success
                )}
              </h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
